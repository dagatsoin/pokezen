import { Axios } from "../lib/data";
import { model } from "../lib/model";
import { AxiosResponse } from "axios";
import actions from "../vendor/arcanium/lib/action/index";
import { Dispatch } from "../vendor/arcanium/api/types";
import { PokemonListItem, ResultList, Pokemon } from "./types";
import { getIdFromUrl } from "../lib/utils";
import { Response, Twitter } from "twit";

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
                    id: getIdFromUrl(entry.pokemon.url)
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

actions.registerAction("FETCH_AVERAGE_TYPE_STATS", function ({dispatch}: { dispatch: Dispatch}, id: string) {
    Axios.get("average_type_stats/" + id).then(function (response: AxiosResponse) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_AVERAGE_TYPE_STATS");
        dispatch("COMMIT_AVERAGE_TYPE_STATS", response.data);
    }).catch(function (reason: any) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_AVERAGE_TYPE_STATS");
        console.error(reason);
    });

    dispatch("PUSH_REST_CALL_ID", "FETCH_AVERAGE_TYPE_STATS");
});

actions.registerAction("FETCH_TWEETS", function({dispatch}: {dispatch: Dispatch}, q: string) {
    Axios.get("tweets/" + q).then(function (response: AxiosResponse) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_TWEETS");
        console.log(response)
        dispatch("COMMIT_TWEETS", (response.data as Response).statuses);
    }).catch(function (reason: any) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_TWEETS");
        console.error(reason);
    });

    dispatch("PUSH_REST_CALL_ID", "FETCH_TWEETS");
});

/**
 *  Actions for commiting
 */

actions.registerAction("COMMIT_AVERAGE_TYPE_STATS", function(
    {dispatch}: { dispatch: Dispatch },
    averageStats: {type: {id: number, name: string}, stats: Array<{name: string, value: number}>}
) {
    model.typeAverageStats.push(averageStats);
});

actions.registerAction("COMMIT_POKEMON_DETAILS", function({dispatch}: { dispatch: Dispatch }, pokemon: Pokemon) {
    model.pokemon = pokemon;
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

actions.registerAction("COMMIT_TWEETS", function ({ dispatch }: { dispatch: Dispatch }, statuses: Twitter.Status[]) {
    model.tweets.splice(0, model.tweets.length, ...statuses);
});