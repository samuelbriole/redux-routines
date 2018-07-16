[![CircleCI](https://circleci.com/gh/samuelbriole/redux-routines.svg?style=svg&circle-token=af14fa72e790f9d3d58b696145a331aaae7ff952)](https://circleci.com/gh/samuelbriole/redux-routines) [![Greenkeeper badge](https://badges.greenkeeper.io/samuelbriole/theodo-redux-routines.svg)](https://greenkeeper.io/)

# redux-routines

### Install :

```bash
npm install theodo-redux-routines
// or
yarn add theodo-redux-routines
```

### Use : 

With the actions / saga / reducer pattern :

- simply create a routine with a prefix string

```javascript
// actions.js

import createRoutine from 'theodo-redux-routines'

export const fetchData = createRoutine('FETCH_DATA')
```

- use the routine REQUEST, SUCCESS and FAILURE constants in your reducer

```javascript
// reducer.js

import { fetchData } from './actions'


export default (originalState = initialState, action {
  switch (action.type) {
    case fetchData.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case fetchData.SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case fetchData.FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
```

- use the action creators in your saga to dispatch success / failure 

```javascript
// saga.js

import { fetchData } from './actions'


export function* fetchDataSaga() {
  try {
    let data = yield call( ... );
    yield put(fetchData.success(data));
  } catch (e) {
    yield put(fetchData.failure(e));
  }
}

export function* rootSaga() {
  yield takeLatest(fetchData.REQUEST, fetchDataSaga);
}
```

- use the action creator request to trigger the saga from your component

```javascript
// saga.js

import { fetchData } from './actions'


class MyComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData.request())
  }

  ...
}

export default connect()(MyComponent)
```
