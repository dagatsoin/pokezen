import { CONTROL_STATE, Render } from "../../api/types";
import { noop } from "../utils";

const representations = new Map<CONTROL_STATE, Render>();

export function registerRepresentation(controlStates: Array<CONTROL_STATE>, representation: Render) {
    controlStates.forEach(function (controlState: CONTROL_STATE) {
        if (representations.has(controlState)) console.warn(
            "registerRepresentation",
            "override an existing representation for control state",
            controlState);

        representations.set(controlState, representation);
    });
}

// Todo: choose a template of a representation by passing the model.
// Todo: cache the representation ?
export function deriveFrom(controlState: CONTROL_STATE): Render {
    if (representations.has(controlState)) return representations.get(controlState)!;
    else {
        console.error(
            "Representation.deriveFrom: unknown control state. The current step can't generate a new representation.",
            controlState
        );
        return noop;
    }
}