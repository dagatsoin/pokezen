import { Axios } from "../lib/data";
import { model } from "../lib/model";
import { AxiosResponse } from "axios";
import actions from "../vendor/arcanium/lib/action/index";
import { Dispatch } from "../vendor/arcanium/api/types";
import { PokemonList } from "./types";

// Todo: SAM pattern violation. Need to implement mutations. Action should not mutate the model!

actions.registerAction("PUSH_REST_CALL_ID", function ({ dispatch }: { dispatch: Dispatch }, id: string) {
    model.pendingRequest.push(id);
});

actions.registerAction("DELETE_REST_CALL_ID", function ({ dispatch }: { dispatch: Dispatch }, id: string) {
    model.pendingRequest.splice(model.pendingRequest.findIndex(requestId => requestId === id), 1);
});

actions.registerAction("FETCH_POKEMEON_LIST", function ({ dispatch }: { dispatch: Dispatch }, query: string) {
    Axios.get("pokemon/").then(function (response: AxiosResponse) {
        dispatch("DELETE_REST_CALL_ID", "names/");
        dispatch("COMMIT_POKEMON_LIST", response.data.results);
    }).catch(function (reason: any) {
        dispatch("DELETE_REST_CALL_ID", "names/");
        console.error(reason);
    });

    dispatch("PUSH_REST_CALL_ID", "pokemon/");
});

actions.registerAction("SEARCH", function ({ dispatch }: { dispatch: Dispatch }, query: string) {
    Axios.get("search/" + query).then(function (response: AxiosResponse) {
        dispatch("DELETE_REST_CALL_ID", "pokemon/");
        dispatch("COMMIT_POKEMON_LIST", response);
    }).catch(function (reason: any) {
        dispatch("DELETE_REST_CALL_ID", "pokemon/");
        console.error(reason);
    });

    dispatch("PUSH_REST_CALL_ID", "pokemon/");
});

// todo turn this into a mutation!!
actions.registerAction("COMMIT_POKEMON_LIST", function ({ dispatch }: { dispatch: Dispatch }, pokemonList: PokemonList) {    
    model.pokemonList.splice(0, model.pokemonList.length, ...pokemonList);
});