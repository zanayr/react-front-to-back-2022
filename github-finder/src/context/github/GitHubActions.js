import axios from "axios";

const GITHUB_API = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_API,
  headers: { Authorization: `token ${ GITHUB_TOKEN }` },
})

// Get Users
export const getUsers = async text => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${ params }`);

  return response.data.items;
}

// Get User and Repos
export const getUserData = async login => {
  const [ user, repos ] = await Promise.all([
    github.get(`/users/${ login }`),
    github.get(`/users/${ login }/repos`),
  ]);

  return { user: user.data, repos: repos.data };
}