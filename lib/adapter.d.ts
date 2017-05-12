import { Observable } from 'rxjs';
export interface IMessageWithId {
    payloadType: number;
    payload: Object;
    clientMsgId: string;
}
export declare enum AdapterConnectionStates {
    CONNECTED = 1,
    DISCONNECTED = 2,
    CONNECTING = 3,
}
export interface IConnectionAdapter {
    send: (data: IMessageWithId) => void;
    state$: Observable<AdapterConnectionStates>;
    data$: Observable<IMessageWithId>;
    connect: (url: string) => void;
}
