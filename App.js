import React from 'react';
import PinsNavigator from './navigation/PinsNavigator';
import { useState } from 'react/cjs/react.development';
import { createStore, combineReducers } from 'redux';
import pinsReducer from './store/reducers/pins';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  pins: pinsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [selectedPins, setSelectedPins] = useState([]);
  return (
    <Provider store={store}>
      <PinsNavigator
        selectedPins={selectedPins}
        setSelectedPins={setSelectedPins}
      />
    </Provider>
  );
}
