import mitt from 'mitt';

export enum ReduxEvents {
  Dispatch = 'dispatch',
  StateChanged = 'stateChanged',
}

export interface IReduxEvenData {
  [ReduxEvents.Dispatch]: {
    type: string;
    payload?: any;
  };
  [ReduxEvents.StateChanged]: {
    model: string;
    key: string;
    value: any;
  };
}

// @ts-ignore
export const reduxEmitter = mitt<IReduxEvenData>();
