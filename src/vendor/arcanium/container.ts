import { Dispatch, Payload } from "./api/types";
import actions from "./lib/action/index";

interface Container {
    model: any;
    init: (model: any) => void;
}

export const container: Container = {
    model: null,
    init: (model: any) => null,
};

container.init = function(model: any) {
    container.model = model;
    actions.init(model);
};

export const dispatch: Dispatch = (type: string, payload: Payload) => {
    if (actions.has(type)) actions.get(type)!({dispatch}, payload);
    else (console.error("Unknown action", type));
};