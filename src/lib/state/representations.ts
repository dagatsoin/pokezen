import { registerRepresentation } from "../../vendor/arcanium/lib/state/modelRepresentations";
import { CONTROL_STATE } from "../../vendor/arcanium/api/types";
import { ViewModel, Model } from "../../api/types";

registerRepresentation([CONTROL_STATE.INITIALIZING, CONTROL_STATE.READY], (model: Model) => model as ViewModel);