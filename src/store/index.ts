import { observable } from "mobx";
import { Store } from "../api/types";

export const store: Store = observable({
    pendingRequest: [],
    searchResult: [],
    // Caching pokemons name and url for faster result
    listCache: [],
    // Pokemon details
    pokemons: []
});