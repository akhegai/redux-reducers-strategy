"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findReducer = function (reducerFilters, action) {
    return reducerFilters.find(function (it) {
        if (it.filter) {
            return it.filter(action.type, action);
        }
        if (!it.type) {
            throw new Error('You should provider either `type` or `filter`, but none was provided');
        }
        return Array.isArray(it.type) ? it.type.includes(action.type) : it.type === action.type;
    });
};
/**
 *
 * @param reducerFilters Array of Reducer
 * @param initialState Initial Redux state
 */
exports.makeReducerHandler = function (reducerFilters, initialState) { return function (state, action) {
    if (state === void 0) { state = initialState; }
    var reducerFilter = findReducer(reducerFilters, action);
    return reducerFilter ? Object.assign({}, state, reducerFilter.reduce(state, action)) : state;
}; };
