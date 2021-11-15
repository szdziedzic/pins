import { TOGGLE_PIN } from '../actions/pins';

const initialState = {
  selectedPins: [],
};

const pinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PIN:
      if (state.selectedPins.includes(action.pinTitle)) {
        return {
          ...state,
          selectedPins: state.selectedPins.filter((p) => p != action.pinTitle),
        };
      }
      return {
        ...state,
        selectedPins: state.selectedPins.concat(action.pinTitle),
      };
    default:
      return state;
  }
};

export default pinsReducer;
