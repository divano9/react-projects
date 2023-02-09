//reducer default state
export const defaultState = {
  loading: true,
  jobs: [],
  value: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return { ...state, jobs: action.payload };
    case "TURN_OFF_LOADING":
      return { ...state, loading: false };
    case "SET_VALUE":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
