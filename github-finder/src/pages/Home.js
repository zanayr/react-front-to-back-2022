import UserResults from "../components/users/UserResults.js";
import UserSearch from "../components/users/UserSearch.js";

function Home() {
  return (
    <>
      {/* SEARCH COMPONENT */}
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;