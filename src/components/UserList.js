import User from "./User";
import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url =
      "https://randomuser.me/api/?inc=email,gender,name,picture&results=100";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data.results);
      });
  }, []);

  function renderUser() {
    const userList = users.map((user) => (
      <User
        key={user.email}
        title={user.name.title}
        first={user.name.first}
        last={user.name.last}
        gender={user.gender}
        pictureURL={user.picture.medium}
      />
    ));
    return userList;
  }
  return <section className="UserList">{renderUser()}</section>;
}

export default UserList;
