export enum CONTROL_STATE {
    UNKNOWN = "UNKNOWN",
    INITIALIZING = "INITIALIZING",
    READY = "READY",
}

export type ControlStatePredicate = (model: any) => boolean;

export type Render = (model: any) => void;

export type Dispatch = (type: string, payload?: Payload) => void;

export type Payload = any;

export type ActionContext = {
    dispatch: Dispatch;
};

export type Action = (context: ActionContext, payload: Payload) => void;