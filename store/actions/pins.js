export const TOGGLE_PIN = 'TOGGLE_PIN';

export const togglePin = (title) => {
  return {
    type: TOGGLE_PIN,
    pinTitle: title,
  };
};
