export declare type ActionType = string;
/**
 * Redux Action
 */
export interface Action {
    type: ActionType;
    [key: string]: any;
}
/**
 * Reducer type
 */
export declare type Reducer<State> = (state: State, action?: Action) => Partial<State>;
/**
 * Function filtering actions
 */
export declare type ReducerFilter<State> = {
    filter?: (type: ActionType, action: Action) => boolean;
    type?: ActionType[] | ActionType;
    reduce: Reducer<State>;
};
/**
 *
 * @param reducerFilters Array of Reducer
 * @param initialState Initial Redux state
 */
export declare const makeReducerHandler: <State>(reducerFilters: ReducerFilter<State>[], initialState: State) => (state: State | undefined, action: Action) => State;
