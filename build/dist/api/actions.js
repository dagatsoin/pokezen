var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Axios } from "../lib/data";
import { model } from "../lib/model";
import actions from "../vendor/arcanium/lib/action/index";
import { getIdFromUrl } from "../lib/utils";
// Todo: SAM pattern violation. Need to implement mutations. Action should not mutate the model!
actions.registerAction("PUSH_REST_CALL_ID", function (_a, id) {
    var dispatch = _a.dispatch;
    model.pendingRequest.push(id);
});
actions.registerAction("DELETE_REST_CALL_ID", function (_a, id) {
    var dispatch = _a.dispatch;
    model.pendingRequest.splice(model.pendingRequest.findIndex(function (requestId) { return requestId === id; }), 1);
});
actions.registerAction("FETCH_INITIAL_DATA", function (_a, query) {
    var dispatch = _a.dispatch;
    Axios.get("names/").then(function (response) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_INITIAL_DATA");
        dispatch("COMMIT_INITIAL_DATA", { names: response.data.map(function (item) { return item.name; }) });
    }).catch(function (reason) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_INITIAL_DATA");
        console.error(reason);
    });
    dispatch("PUSH_REST_CALL_ID", "DELETE_REST_CALL_ID");
});
actions.registerAction("SEARCH", function (_a, query) {
    var dispatch = _a.dispatch;
    Axios.get("search/" + query).then(function (response) {
        dispatch("DELETE_REST_CALL_ID", "SEARCH");
        dispatch("COMMIT_SEARCH_RESULT", response.data.map(function (entry) { return (__assign({}, entry, { pokemon: {
                name: entry.pokemon.name,
                id: getIdFromUrl(entry.pokemon.url)
            } })); }));
    }).catch(function (reason) {
        dispatch("DELETE_REST_CALL_ID", "SEARCH");
        console.error(reason);
    });
    dispatch("PUSH_REST_CALL_ID", "SEARCH");
});
actions.registerAction("FETCH_POKEMON", function (_a, id) {
    var dispatch = _a.dispatch;
    Axios.get("pokemon/" + id).then(function (response) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_POKEMON");
        dispatch("COMMIT_POKEMON_DETAILS", response.data);
    }).catch(function (reason) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_POKEMON");
        console.error(reason);
    });
    dispatch("PUSH_REST_CALL_ID", "FETCH_POKEMON");
});
actions.registerAction("FETCH_AVARAGE_TYPE_STATS", function (_a, id) {
    var dispatch = _a.dispatch;
    Axios.get("average_type_stats/" + id).then(function (response) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_AVARAGE_TYPE_STATS");
        dispatch("COMMIT_AVARAGE_TYPE_STATS", response.data);
    }).catch(function (reason) {
        dispatch("DELETE_REST_CALL_ID", "FETCH_AVARAGE_TYPE_STATS");
        console.error(reason);
    });
    dispatch("PUSH_REST_CALL_ID", "FETCH_AVARAGE_TYPE_STATS");
});
actions.registerAction("COMMIT_AVARAGE_TYPE_STATS", function (_a, averageStats) {
    var dispatch = _a.dispatch;
    model.typeAverageStats.push(averageStats);
});
actions.registerAction("COMMIT_POKEMON_DETAILS", function (_a, pokemon) {
    var dispatch = _a.dispatch;
    model.pokemon = pokemon;
});
actions.registerAction("COMMIT_POKEMON_LIST", function (_a, pokemonList) {
    var dispatch = _a.dispatch;
    (_b = model.pokemonList).splice.apply(_b, [0, model.pokemonList.length].concat(pokemonList));
    var _b;
});
actions.registerAction("COMMIT_SEARCH_RESULT", function (_a, results) {
    var dispatch = _a.dispatch;
    (_b = model.searchResult).splice.apply(_b, [0, model.searchResult.length].concat(results));
    var _b;
});
actions.registerAction("COMMIT_INITIAL_DATA", function (_a, initialData) {
    var dispatch = _a.dispatch;
    (_b = model.names).splice.apply(_b, [0, model.names.length].concat(initialData.names));
    var _b;
});
//# sourceMappingURL=actions.js.map