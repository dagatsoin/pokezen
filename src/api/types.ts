// Type from https://pokeapi.co/docsv2/#pokemon

export type PokemonSprites = {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
};

export type NamedAPIResource = {
    name: string;
    url: string;
};

export type PokemonStat = {
    effort: number;
    base_stat: number;
};

export type PokemonType = {
    slot: number;
};

export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    stats: Array<PokemonStat>;
    sprites: PokemonSprites;
};

export type CachedListItem = { 
    tags: Array<string>, 
    name: string, 
    url: string
};

export type Store = {
    pendingRequest: Array<string>;
    searchResult: Array<{ name: string, url: string }>;
    listCache: Array<CachedListItem>;
    pokemons: Array<Pokemon>;
};