import { useContext } from "react";
import Spinner from "../layout/Spinner.js";
import UserItem from "./UserItem.js";
import GitHubContext from "../../context/github/GitHubContext.js";

function UserResults() {
  const { users, isLoading } = useContext(GitHubContext);

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        { users.map(user => <UserItem key={ user.id } user={ user }/>) }
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults;