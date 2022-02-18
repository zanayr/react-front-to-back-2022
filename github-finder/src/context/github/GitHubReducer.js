const gitHubReducer = (state, action) => {
  switch(action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case "GET_USER_DATA":
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default gitHubReducer;