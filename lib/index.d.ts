export declare type ActionType = string;
export interface Action {
    type: ActionType;
    [key: string]: any;
}
export declare type Reducer<State> = (state: State, action?: Action) => State;
export declare type ReducerFilter<State> = {
    filter?: (type: ActionType, action: Action) => boolean;
    type?: ActionType[] | ActionType;
    reduce: Reducer<State>;
};
export declare const makeReducerHandler: <State>(reducerFilters: ReducerFilter<State>[], initialState: State) => (state: State | undefined, action: Action) => State;
