import { observable } from "mobx";
export var model = observable({
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
//# sourceMappingURL=index.js.map