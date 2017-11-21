import { action as mobxAction } from "mobx";
import { computeState } from "../state/index";
import { dispatch } from "../../container";
var actions = new Map();
var modelRef;
/**
 * Wrapper for Mobx action. This will trigger the state computation after each action.
 * @param {Function} fn
 * @returns {function(): any}
 */
export var action = function (type, fn) {
    return mobxAction(type, function (context, payload) {
        console.info("Dispatching action", type, payload);
        fn({ dispatch: dispatch }, payload);
        if (modelRef)
            computeState(modelRef);
        else
            console.error("Action expection: no model was defined. \n        The next state won't be computed and UI won't refresh.\n        Use action.init(yourModel) to inject model in the action wrapper BEFORE the first action is launched");
    });
};
function registerAction(type, fn) {
    actions.set(type, action(type, fn));
}
function init(model) {
    modelRef = model;
}
function has(type) {
    return actions.has(type);
}
function get(type) {
    return actions.get(type);
}
export default {
    init: init,
    registerAction: registerAction,
    has: has,
    get: get
};
//# sourceMappingURL=index.js.map