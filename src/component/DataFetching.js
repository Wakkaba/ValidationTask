import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import UsersGET from "../data/api/UsersApi";

const Users_API = new UsersGET();

const DataFetching = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Users_API.getUsers()
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <ul>
        {users.map((user) => (
          <Typography key={user.id}>
            <br />
            Name: {user.firstName}
            <br />
            Surname: {user.lastName}
            <br />
            Email: {user.email}
          </Typography>
        ))}
      </ul>
    </Box>
  );
};

export default DataFetching;
