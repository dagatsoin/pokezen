import { observable } from "mobx";
import { Model } from "../../api/types";

export const model: Model = observable({
    initializing: true,
    pendingRequest: [],
    searchResult: [],
    // Caching pokemons names
    names: [],
    pokemonList: [],
    // Pokemon details
    pokemon: null,
    // Array of average stats by type
    typeAverageStats: [],
});