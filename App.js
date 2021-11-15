import React from 'react';
import PinsNavigator from './navigation/PinsNavigator';
import { createStore, combineReducers } from 'redux';
import pinsReducer from './store/reducers/pins';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  pins: pinsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <PinsNavigator />
    </Provider>
  );
}
