import { registerControlStatePredicate } from "../../vendor/arcanium/lib/state";
import { CONTROL_STATE } from "../../vendor/arcanium/api/types";
registerControlStatePredicate(CONTROL_STATE.INITIALIZING, function (model) { return model.initializing; });
registerControlStatePredicate(CONTROL_STATE.READY, function (model) { return !model.initializing; });
//# sourceMappingURL=controlStates.js.map