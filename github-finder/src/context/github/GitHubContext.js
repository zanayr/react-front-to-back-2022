import { createContext, useReducer } from "react";
import gitHubReducer from "./GitHubReducer.js";

const GitHubContext = createContext();

const GITHUB_API = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  const search = async text => {
    setIsLoading();
    
    const params = new URLSearchParams({
      q: text
    })
    const response = await fetch(`${ GITHUB_API }/search/users?${ params }`, {
      headers: {
        Authorization: `token ${ GITHUB_TOKEN }`,
      },
    });

    const { items } = await response.json();
    
    dispatch({
      type: "SEARCH_USERS",
      payload: items,
    });
  }

  // Clear Users
  const clear = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  // Set Loading
  const setIsLoading = () => dispatch({
    type: "IS_LOADING",
  });

  return <GitHubContext.Provider value={{
    users: state.users,
    isLoading: state.isLoading,
    search,
    clear,
  }}>
    { children }
  </GitHubContext.Provider>
}

export default GitHubContext;