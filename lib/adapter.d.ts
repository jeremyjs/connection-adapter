export interface IMessageWithId {
    payloadType: number,
    payload: Object,
    clientMsgId: string
}

export enum AdapterConnectionStates {
    CONNECTED = 1,
    DISCONNECTED = 2,
    CONNECTING = 3
}

export interface Subscription<T> {
    unsubscribe: () => void;
}

export interface Subscribable<T> {
    subscribe: (callback: (data: T) => void) => Subscription<T>;
}

export interface ConnectionAdapter {
    send: (data: IMessageWithId) => void;
    state: Subscribable <AdapterConnectionStates>;
    data: Subscribable <IMessageWithId>;
    connect: (url: string) => void;
}
