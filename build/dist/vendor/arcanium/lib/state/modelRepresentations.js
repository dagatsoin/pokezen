import { noop } from "../utils";
var representations = new Map();
export function registerRepresentation(controlStates, representation) {
    controlStates.forEach(function (controlState) {
        if (representations.has(controlState))
            console.warn("registerRepresentation", "override an existing representation for control state", controlState);
        representations.set(controlState, representation);
    });
}
// Todo: choose a template of a representation by passing the model.
// Todo: cache the representation ?
export function deriveFrom(controlState) {
    if (representations.has(controlState))
        return representations.get(controlState);
    else {
        console.error("Representation.deriveFrom: unknown control state. The current step can't generate a new representation.", controlState);
        return noop;
    }
}
//# sourceMappingURL=modelRepresentations.js.map