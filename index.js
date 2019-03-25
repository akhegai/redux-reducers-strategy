const findReducer = (reducerFilters, action) => {
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

export const makeReducerHandler = (reducerFilters, initialState) => (state = initialState, action) => {
  const reducerFilter = findReducer(reducerFilters, action)
  return reducerFilter ? Object.assign({}, state, reducerFilter.reduce(state, action)) : state
}
