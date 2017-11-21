import actions from "./lib/action/index";
export var container = {
    model: null,
    init: function (model) { return null; },
};
container.init = function (model) {
    container.model = model;
    actions.init(model);
};
export var dispatch = function (type, payload) {
    if (actions.has(type))
        actions.get(type)({ dispatch: dispatch }, payload);
    else
        (console.error("Unknown action", type));
};
//# sourceMappingURL=container.js.map