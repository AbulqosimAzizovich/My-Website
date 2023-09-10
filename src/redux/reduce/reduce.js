const intState = {
  number: 0,
};

const reducer = (state = intState, action) => {
  switch (action.type) {
    // case "INCREMENT":
    //   return { ...state, number: state.number + 1 };
    // case "DECREMENT":
    //   return { ...state, number: state.number - 1 };

    default:
      return state;
  }
};

export default reducer;
