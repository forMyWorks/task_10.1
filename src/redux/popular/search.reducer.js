const initialState = {
  timeout: null,
  inputValue: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_TIMEOUT":
      return { ...state, timeout: action.payload };
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};
