import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Alert } from "@material-ui/lab";
import { Container } from "@material-ui/core";
import UsersGET from "../data/api/UsersApi";
import UsersPOST from "../data/api/PostApi";

// GET API
// new refactor api calls, get and post as in lecture example
const Users_API = new UsersGET();
// // POST API
const Post_API = new UsersPOST();

const UserDetail = (props) => {

  const [errMsg, setErrMsg] = useState(null);
  const [succs, setSuccs] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== props.password) {
        return false;
      }
      return true;
    });
    ValidatorForm.addValidationRule("Passer", (value) => {
      let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      if (value.match(passw)) {
        return true;
      }
    });
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(props.setEmail);

    switch (name) {
      case "firstName":
        props.setFirstName(value);
        break;

      case "lastName":
        props.setLastName(value);
        break;

      case "email":
        props.setEmail(value);
        break;

      case "password":
        props.setPassword(value);
        break;

      case "repeatPass":
        props.setRepeatPass(value);
        break;

      default:
        console.log("Sorry, we have some troubles");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitted ? setSubmitted(false) : setSubmitted(true);
    setTimeout(() => setSubmitted(setSubmitted(false)), 1000);

    setErrMsg(null);
    setSuccs(null);
    Users_API.getUsers().then((res) => {
      console.log(res.data);

      const users = res.data;
      if (users.some((u) => u.email === props.email)) {
        setErrMsg("Sorry,such user already exists");
      } else {
        Post_API.postUsers(props)
          // Post_API.postUsers(userInfo)

          .then((res) => {
            setSuccs(true);
            console.log(res);
            console.log(res.data);
          })
          .catch((err) => {
            setErrMsg("error");
          });
      }
    });
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Typography variant="h2">Sign up, dude</Typography>
      </AppBar>
      <ValidatorForm onSubmit={handleSubmit}>
        <Typography variant="h3">Enter your info</Typography>
        <TextValidator
          label="Name"
          onChange={handleChange}
          name="firstName"
          // value={formData.firstName}
          value={props.firstName}
          validators={["required"]}
          errorMessages={["this field is required", "field can not be empty!"]}
        />
        <br />
        <TextValidator
          label="Surname"
          onChange={handleChange}
          name="lastName"
          value={props.lastName}
          validators={["required"]}
          errorMessages={["this field is required", "field can not be empty!"]}
        />
        <br />
        <TextValidator
          label="Email"
          onChange={handleChange}
          name="email"
          value={props.email}
          validators={["required", "isEmail"]}
          errorMessages={["this field is required", "email is not valid"]}
        />
        <Container fixed>
          {errMsg && (
            <Alert variant="outlined" severity="error">
              {errMsg}
            </Alert>
          )}
          {succs && (
            <Alert variant="outlined" severity="success">
              Come in
            </Alert>
          )}
        </Container>
        <TextValidator
          label="Password"
          onChange={handleChange}
          name="password"
          type="password"
          validators={["Passer", "required"]}
          errorMessages={[
            "Too weak password, sry :(",
            "this field is required",
          ]}
          value={props.password}
        />
        <br />
        <TextValidator
          label="Repeat password"
          onChange={handleChange}
          name="repeatPass"
          type="password"
          validators={["isPasswordMatch", "required"]}
          errorMessages={["password mismatch", "this field is required"]}
          value={props.repeatPass}
        />
        <br />
        <br />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={submitted}
          onClick={handleSubmit}
        >
          {(submitted && "Signed up!") || (!submitted && "Submit")}
        </Button>
      </ValidatorForm>
    </React.Fragment>
  );
};

export default UserDetail;
