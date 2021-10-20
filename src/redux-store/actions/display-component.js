const DISPLAY = "DISPLAY_COMPONENT";

//action creators
const selectDisplayComponent = (data) => {
  return {
    type: DISPLAY,
    payload: data,
  };
};

export { DISPLAY, selectDisplayComponent };
