import { Observable } from 'rxjs';
export interface IdMessage {
    payloadType: number;
    payload: Object;
    clientMsgId: string;
}
export declare enum AdapterConnectionStates {
    CONNECTED = 1,
    DISCONNECTED = 2,
    CONNECTING = 3,
}
export interface ConnectionAdapter {
    send: (data: IdMessage) => void;
    state: Observable<AdapterConnectionStates>;
    data: Observable<IdMessage>;
    connect: (url: string) => void;
}
