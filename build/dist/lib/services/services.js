import { model } from "../model/index";
import { observe } from "mobx";
/**
 * Services react to the store mutation and can dispatch complementary actions
 */
// Download image when new entries
observe(model.pokemonList, function (change) { return; });
//# sourceMappingURL=services.js.map