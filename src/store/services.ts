import { observe } from "mobx";
import { store } from "./index";
import { IObjectChange } from "mobx/lib/types/observableobject";

/**
 * Services react to the store mutation and can dispatch complementary actions
 */

// Download image when new entries
observe(store.listCache, function (change: IObjectChange) { return; });