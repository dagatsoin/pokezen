// import { CONTROL_STATE } from "../vendor/arcanium/api/types";

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

export type Stat = {
    id: number;
    name: string;
};

export type PokemonStat = {
    stat: Stat;
    effort: number;
    base_stat: number;
};

export type PokemonType = {
    slot: number;
    type: Type;
};

export type Type = {
    url: string;
    name: string; 
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
    types: Array<PokemonType>;
};

export type PokemonListItem = { 
    name: string, 
    id: string
};

export type ResultList = Array<ResultListItem>;

export type ResultListItem = {
    rank: number;
    pokemon: PokemonListItem;
};

export interface Model {
    initializing: boolean;
    pendingRequest: Array<string>;
    searchResult: ResultList;
    pokemonList: Array<PokemonListItem>;
    typeAverageStats: Array<{ 
        type: { name: string, id: number }
        stats: Array<{name: string, value: number}>}>;
    pokedex: Array<Pokemon>;
    names: Array<string>;
}
/**
 * In SAM we can represent a model with some UI element or with a ViewModel (or something else ?).
 * Here, for simplicity, we just define a ViewModel which will be a copy of the actual model. But we could define
 * a different view model to hide some properties to the client.
 */
export interface ViewModel extends Model {}

/**
 * The control state are predictable state that the application can have.
 * This could be helpful to organize the rest of the state computation like the type of representation the model could have.
 * For exemple if the model is a player, the player could be ALIVE or DEAD. When the control state change, the computeState
 * function will serve a different representation (ef. AliveViewModel or DeadViewModel).
 */

// Arcanium contains basic CONTROL_STATE as INITIALIZING or READY. Uncomment to merge some new CONTROL_STATE here.
// namespace CONTROL_STATE {
//    export const FOO = "FOO";
// }