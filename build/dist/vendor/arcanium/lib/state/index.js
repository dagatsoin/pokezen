import { CONTROL_STATE } from "../../api/types";
import { deriveFrom } from "./modelRepresentations";
var controlStatePredicates = new Map();
/**
 * This pure function is the last step of the... Step.
 * It will derivate the model to something exterior to the container could understand.
 * It could be a 3D model, a ViewModel, some HTML...
 * @param model
 */
export function computeState(model) {
    // Compute the new control state of the application for this step.
    var controlState = getControlState(model);
    // How to represent the model for this control state ?
    var render = deriveFrom(controlState);
    render(model);
    // The last role of the state is to learn the services that something change into the model.
    // Maybe some of them have an automatic action to dispatch for this specific control state.
    // Eg. If a player is hit, a "FightLoggerService" could add a new log in the store "Player X has lost 3hp."
    // services.learn(controlState, model);
}
export function registerControlStatePredicate(controlState, predicate) {
    if (controlStatePredicates.has(controlState))
        console.warn("registerControlStatePredicate", "override an existing control state predicate for control state", controlState);
    controlStatePredicates.set(controlState, predicate);
}
function getControlState(model) {
    var entries = Array.from(controlStatePredicates.entries());
    for (var i = 0; i < entries.length; i++) {
        if (entries[i][1](model))
            return entries[i][0];
    }
    console.error("State.computeState: no control state found for current model", model, "Be sure to register control state predicate for all CONTROL_STATEs");
    return CONTROL_STATE.UNKNOWN;
}
//# sourceMappingURL=index.js.map