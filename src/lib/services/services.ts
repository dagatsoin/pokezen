import { model } from "../model/index";
import { IObjectChange, observe } from "mobx";

/**
 * Services react to the store mutation and can dispatch complementary actions
 */

// Download image when new entries
observe(model.pokemonList, function (change: IObjectChange) { return; });