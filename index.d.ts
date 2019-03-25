/**
 * Redux Action
 */
type Action = { type: any; [extraProps: string]: any }

/**
 * Function filtering actions
 */
export type ReducerFilter = (actionType: ActionType, action: Action) => boolean

/**
 * Reducer type
 */
export interface Reducer<S = {}> {
  type: any
  reduce: (state: S, action: Action) => Partial<S>
  filter: ReducerFilter
}

/**
 *
 * @param reducerFilters Array of Reducer
 * @param initialState Initial Redux state
 */
export function makeReducerHandler<S>(
  reducers: Array<Reducer<S>>,
  initialState: S
): (state: S, action: Action) => S
