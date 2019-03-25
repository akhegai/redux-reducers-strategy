# redux reducers strategy

An utils that keeps the reducers clean, yet still powerful.

## Note

This library is not published on NPM.

## Usage example

```js
import makeReducerHandler from 'redux-reducers-strategy'

const initialState = {
  data: [],
  loading: false,
  error: null
}

const reducers = [
  {
    type: 'USERS_REQUEST',
    reduce: state => ({
      loading: true
    })
  },
  {
    type: 'USERS_REQUEST_SUCCESS',
    reduce: (state, { users }) => ({
      data: users,
      loading: false
    })
  },
  {
    type: 'USERS_REQUEST_FAIL',
    reduce: (state, { error }) => ({
      error,
      loading: false
    })
  }
]

// function which this library exports
export default makeReducerHandler(reducers, initialState)
```

This library exports only one function: **makeReducerHandler**

It takes two arguments: reducers array and initial state object.

A reducer is an object with structure:

```js
{
  type: 'USERS_REQUEST' // An action type string, optional
  filter: (actionType, action) => actionType === 'USERS_REQUEST' // A function that should return boolean. Used for alternate filtering, optional
  reduce: (state, action) => ({
    loading: true
  }) // A reducer that is expected to return new state, required
}
```

Either the **_type_** or **_filter_** must be provided

**_It handles 1 level of state merge_**

So you can use

```js
const reducer = state => ({ loading: true })
```

instead of

```js
const reducer = state => ({ ...state, loading: true })
```

## TODO:
- [x] add types for typescript
- [ ] publish the package to npm
