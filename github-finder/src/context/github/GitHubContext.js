import { createContext, useReducer } from "react";
import gitHubReducer from "./GitHubReducer.js";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  return <GitHubContext.Provider value={{
    ...state,
    dispatch,
  }}>
    { children }
  </GitHubContext.Provider>
}

export default GitHubContext;