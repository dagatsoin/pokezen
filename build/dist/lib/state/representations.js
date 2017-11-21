import { registerRepresentation } from "../../vendor/arcanium/lib/state/modelRepresentations";
import { CONTROL_STATE } from "../../vendor/arcanium/api/types";
registerRepresentation([CONTROL_STATE.INITIALIZING, CONTROL_STATE.READY], function (model) { return model; });
//# sourceMappingURL=representations.js.map