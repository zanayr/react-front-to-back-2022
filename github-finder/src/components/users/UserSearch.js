import { useState, useContext } from "react";

import { getUsers} from "../../context/github/GitHubActions.js";
import GitHubContext from "../../context/github/GitHubContext.js";
import AlertContext from "../../context/alert/AlertContext.js";

function UserSearch() {
  const [ text, setText ] = useState("");
  const { users, dispatch } = useContext(GitHubContext);
  const { setAlert } = useContext(AlertContext);

  const handleOnChange = e => setText(e.target.value);
  const handleOnSubmit = async e => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      const users = await getUsers(text);
      dispatch({ type: "IS_LOADING" });
      dispatch({ type: "GET_USERS", payload: users })
      setText("");
    }
  }


  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={ handleOnSubmit }>
          <div className="form-control">
            <div className="relative">
              <input
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                type="text"
                placeholder="search"
                value={ text }
                onChange={ handleOnChange }/>
              <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg" type="submit">Go</button>
            </div>
          </div>
        </form>
      </div>
      { users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={ () => dispatch({ type: "CLEAR_USERS" }) }>Clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;