import { Axios } from "../lib/data";
import { model } from "../lib/model";
import { AxiosResponse } from "axios";
import actions from "../vendor/arcanium/lib/action/index";
import { Dispatch } from "../vendor/arcanium/api/types";
import { PokemonListItem, ResultList, Pokemon } from "./types";

// Todo: SAM pattern violation. Need to implement mutations. Action should not mutate the model!

actions.registerAction("PUSH_REST_CALL_ID", function ({ dispatch }: { dispatch: Dispatch }, id: string) {
    model.pendingRequest.push(id);
});

actions.registerAction("DELETE_REST_CALL_ID", function ({ dispatch }: { dispatch: Dispatch }, id: string) {
    model.pendingRequest.splice(model.pendingRequest.findIndex(requestId => requestId === id), 1);
});

actions.registerAction("FETCH_INITIAL_DATA", function ({ dispatch }: { dispatch: Dispatch }, query: string) {
    Axios.get("names/").then(function (response: AxiosResponse) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_INITIAL_DATA");
        dispatch("COMMIT_INITIAL_DATA", { names: response.data.map((item: any) => item.name) });
    }).catch(function (reason: any) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_INITIAL_DATA");
        console.error(reason);
    });

    dispatch("PUSH_REST_CALL_ID", "DELETE_REST_CALL_ID");
});

actions.registerAction("SEARCH", function ({ dispatch }: { dispatch: Dispatch }, query: string) {
    Axios.get("search/" + query).then(function (response: AxiosResponse) {
        dispatch("DELETE_REST_CALL_ID", "SEARCH");
        dispatch(
            "COMMIT_SEARCH_RESULT", 
            response.data.map((entry: {rank: number, pokemon: {name: string, url: string}}) => ({
                ...entry,
                pokemon: {
                    name: entry.pokemon.name,
                    id: entry.pokemon.url.match(new RegExp(/([^\/]+)\/?$/))![1]
                }
            }))
        );
    }).catch(function (reason: any) {
        dispatch("DELETE_REST_CALL_ID", "SEARCH");
        console.error(reason);
    });

    dispatch("PUSH_REST_CALL_ID", "SEARCH");
});

actions.registerAction("FETCH_POKEMON", function ({ dispatch }: { dispatch: Dispatch }, id: string) {
    Axios.get("pokemon/" + id).then(function (response: AxiosResponse) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_POKEMON");
        dispatch("COMMIT_POKEMON_DETAILS", response.data);
    }).catch(function (reason: any) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_POKEMON");
        console.error(reason);
    });

    dispatch("PUSH_REST_CALL_ID", "FETCH_POKEMON");
});

actions.registerAction("COMMIT_POKEMON_DETAILS", function({dispatch}: { dispatch: Dispatch }, pokemon: Pokemon) {
    model.pokedex.push(pokemon);
});

actions.registerAction("COMMIT_POKEMON_LIST", function (
    { dispatch }: { dispatch: Dispatch },
    pokemonList: Array<PokemonListItem>
) {
    model.pokemonList.splice(0, model.pokemonList.length, ...pokemonList);
});

actions.registerAction("COMMIT_SEARCH_RESULT", function (
    { dispatch }: { dispatch: Dispatch },
    results: ResultList
) {
    model.searchResult.splice(0, model.searchResult.length, ...results);
});

actions.registerAction("COMMIT_INITIAL_DATA", function ({ dispatch }: { dispatch: Dispatch }, initialData: {
    names: Array<string>
}
) {
    model.names.splice(0, model.names.length, ...initialData.names);
});