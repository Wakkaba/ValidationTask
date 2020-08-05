import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const DataFetching = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
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
