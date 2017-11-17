import { action } from "mobx";
import { Axios } from "../data";
import { store } from "../store";
import { AxiosResponse } from "axios";

function pushRequestId(id: string) {
    store.pendingRequest.push("pokemon/");
}

function deleteRequestId(id: string) {
    store.pendingRequest.splice(store.pendingRequest.findIndex(requestId => requestId === "pokemon/"), 1);
}

export const fetchInitialData = action("FetchData", () => {
    Axios.get("pokemon/?limit=1000").then(function(response: AxiosResponse) {
        deleteRequestId("pokemon/");
        response.data.results.forEach(function (result: { name: string, url: string}) {
            if (result.name) store.listCache.push({name: result.name, url: result.url, tags: [result.name]});
        });
    }).catch(function(reason: any) {
        deleteRequestId("pokemon/");
        console.error(reason);
    });
    
    pushRequestId("pokemon/");
});