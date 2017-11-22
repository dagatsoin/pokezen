import { model } from "../model/index";
import { reaction } from "mobx";
import { dispatch } from "../../vendor/arcanium/container";
import { normalize } from "../utils";
import { clearInterval } from "timers";
import { Pokemon } from "../../api/types";

/**
 * Services react to the store mutation and can dispatch complementary actions
 */

// Fetch live tweets every 30s
let timer: any;
reaction(
    () => model.pokemon,
    (pokemon: Pokemon) => {
        if (timer) clearInterval(timer);        
        timer = setInterval(
            function () {
                dispatch("FETCH_TWEETS", normalize(pokemon.name));      
            },
            10000
        );
        dispatch("FETCH_TWEETS", normalize(pokemon.name));
    });