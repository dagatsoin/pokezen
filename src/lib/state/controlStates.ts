import { registerControlStatePredicate } from "../../vendor/arcanium/lib/state";
import { CONTROL_STATE } from "../../vendor/arcanium/api/types";
import { Model } from "../../api/types";

registerControlStatePredicate(CONTROL_STATE.INITIALIZING, (model: Model) => model.initializing);
registerControlStatePredicate(CONTROL_STATE.READY, (model: Model) => !model.initializing);