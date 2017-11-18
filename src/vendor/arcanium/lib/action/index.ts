import { action as mobxAction } from "mobx";
import { computeState } from "../state/index";
import { Action, Payload, ActionContext } from "../../api/types";
import { dispatch } from "../../container";

const actions = new Map<string, Action>();
let modelRef: any;

/**
 * Wrapper for Mobx action. This will trigger the state computation after each action.
 * @param {Function} fn
 * @returns {function(): any}
 */
export const action = function (type: string, fn: Action) {
    return mobxAction(type, function (context: ActionContext, payload?: Payload) {
        console.info("Dispatching action", type, payload);
        fn({ dispatch }, payload);
        if (modelRef) computeState(modelRef);
        else console.error(`Action expection: no model was defined. 
        The next state won't be computed and UI won't refresh.
        Use action.init(yourModel) to inject model in the action wrapper BEFORE the first action is launched`);
    });
};

function registerAction(type: string, fn: Action) {
    actions.set(type, action(type, fn));
}

function init(model: any) {
    modelRef = model;
}

function has(type: string): boolean {
    return actions.has(type);
}

function get(type: string): Action | undefined {
    return actions.get(type);
}

export default {
    init,
    registerAction,
    has,
    get
};