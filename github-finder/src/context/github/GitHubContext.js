import { createContext, useReducer } from "react";
import gitHubReducer from "./GitHubReducer.js";

const GitHubContext = createContext();

const GITHUB_API = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  const getUsers = async text => {
    setIsLoading();
    
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${ GITHUB_API }/search/users?${ params }`, {
      headers: {
        Authorization: `token ${ GITHUB_TOKEN }`,
      },
    });

    const { items } = await response.json();
    
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  }

  const getUser = async login => {
    setIsLoading();
    
    const response = await fetch(`${ GITHUB_API }/users/${ login }`, {
      headers: {
        Authorization: `token ${ GITHUB_TOKEN }`,
      },
    });

    if (response.status === 404) {
      window.location = "/404";
    } else {
      const data = await response.json();
      
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  }

  const getRepos = async login => {
    setIsLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const response = await fetch(`${ GITHUB_API }/users/${ login }/repos?${ params }`, {
      headers: {
        Authorization: `token ${ GITHUB_TOKEN }`,
      },
    });

    const data = await response.json();
    
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  }

  // Clear Users
  const clearUsers = () => {
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
    user: state.user,
    repos: state.repos,
    isLoading: state.isLoading,
    getUsers,
    getUser,
    getRepos,
    clearUsers,
  }}>
    { children }
  </GitHubContext.Provider>
}

export default GitHubContext;