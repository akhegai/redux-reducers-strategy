export type ActionType = string

/**
 * Redux Action
 */
export interface Action {
  type: ActionType
  [key: string]: any
}

/**
 * Reducer type
 */
export type Reducer<State> = (state: State, action?: Action) => Partial<State>

/**
 * Function filtering actions
 */
export type ReducerFilter<State> = {
  filter?: (type: ActionType, action: Action) => boolean
  type?: ActionType[] | ActionType
  reduce: Reducer<State>
}

const findReducer = <State>(reducerFilters: ReducerFilter<State>[], action: Action) => {
  return reducerFilters.find(it => {
    if (it.filter) {
      return it.filter(action.type, action)
    }
    if (!it.type) {
      throw new Error('You should provider either `type` or `filter`, but none was provided')
    }
    return Array.isArray(it.type) ? it.type.includes(action.type) : it.type === action.type
  })
}

/**
 *
 * @param reducerFilters Array of Reducer
 * @param initialState Initial Redux state
 */
export const makeReducerHandler = <State>(reducerFilters: ReducerFilter<State>[], initialState: State) => (
  state: State = initialState,
  action: Action
): State => {
  const reducerFilter = findReducer(reducerFilters, action)
  return reducerFilter ? Object.assign({}, state, reducerFilter.reduce(state, action)) : state
}
