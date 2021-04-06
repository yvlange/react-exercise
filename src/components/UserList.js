import User from "./User";
import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const baseUrl = "https://randomuser.me/api/?inc=email,gender,name,picture";

    let url = baseUrl;

    if (results) {
      url = `${baseUrl}&results=${results}`;
    } else {
      url = `${baseUrl}&results=10`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
    console.log(url);
  }, [results]);

  function handleResultChange(event) {
    setResults(event.target.value);
  }

  let filteredUsers;
  if (filter === "female") {
    filteredUsers = users.filter((users) => users.gender === "female");
  } else if (filter === "male") {
    filteredUsers = users.filter((users) => users.gender === "male");
  } else {
    filteredUsers = users;
  }

  function handleFilterAllClick() {
    setFilter("");
  }

  function handleFilterFemaleClick() {
    setFilter("female");
  }

  function handleFilterMaleClick() {
    setFilter("male");
  }

  function renderUser() {
    return filteredUsers.map((user) => (
      <User
        key={user.email}
        title={user.name.title}
        first={user.name.first}
        last={user.name.last}
        gender={user.gender}
        pictureURL={user.picture.medium}
      />
    ));
  }

  return (
    <div>
      <p>Number of results: {users.length}</p>
      <input
        placeholder="Type number of results"
        type="text"
        onChange={handleResultChange}
      />
      <button onClick={handleFilterAllClick}>All</button>
      <button onClick={handleFilterFemaleClick}>Female</button>
      <button onClick={handleFilterMaleClick}>Male</button>

      <div className="UserList">{renderUser()}</div>
    </div>
  );
}

export default UserList;
