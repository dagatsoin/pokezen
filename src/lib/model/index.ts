import { observable } from "mobx";
import { Model } from "../../api/types";

export const model: Model = observable({
    initializing: true,
    pendingRequest: [],
    searchResult: [],
    // Caching pokemons name and url for faster result
    pokemonList: [],
    // Pokemon details
    pokemonDetails: []
});