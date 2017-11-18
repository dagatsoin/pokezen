import { Axios } from "../lib/data";
import { model } from "../lib/model";
import { AxiosResponse } from "axios";
import actions from "../vendor/arcanium/lib/action/index";
import { Dispatch } from "../vendor/arcanium/api/types";

// Todo: SAM pattern violation. Need to implement mutations. Action should not mutate the model!

actions.registerAction("PUSH_REST_CALL_ID", function ({ dispatch }: { dispatch: Dispatch }, id: string) {
    model.pendingRequest.push(id);
});

actions.registerAction("DELETE_REST_CALL_ID", function ({ dispatch }: { dispatch: Dispatch }, id: string) {
    model.pendingRequest.splice(model.pendingRequest.findIndex(requestId => requestId === id), 1);
});

actions.registerAction("FETCH_INITIAL_DATA", function ({ dispatch }: { dispatch: Dispatch }) {
    Axios.get("pokemon/?limit=1000").then(function (response: AxiosResponse) {
        dispatch("DELETE_REST_CALL_ID", "pokemon/");
        dispatch("COMMIT_INITIAL_DATA", response);
    }).catch(function (reason: any) {
        dispatch("DELETE_REST_CALL_ID", "pokemon/");
        console.error(reason);
    });

    dispatch("PUSH_REST_CALL_ID", "pokemon/");
});

// todo turn this into a mutation!!
actions.registerAction("COMMIT_INITIAL_DATA", function ({ dispatch }: { dispatch: Dispatch }, response: AxiosResponse) {
    console.log(response);
    response.data.results.forEach(function (result: { name: string, url: string }) {
        if (result.name) model.listCache.push({ name: result.name, url: result.url, tags: [result.name] });
    });
});