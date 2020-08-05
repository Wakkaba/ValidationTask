import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Alert } from "@material-ui/lab";
import { Container } from "@material-ui/core";
import axios from "axios";

const UserDetail = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPass: "",
  });
  const [errMsg, setErrMsg] = useState(null);
  const [succs, setSuccs] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== formData.password) {
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

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitted ? setSubmitted(false) : setSubmitted(true);
    setTimeout(() => setSubmitted(setSubmitted(false)), 1000);

    const userInfo = { ...formData };
    setErrMsg(null);
    setSuccs(null);
    axios.get(`http://localhost:3001/users`).then((res) => {
      console.log(res.data);

      const users = res.data;
      if (users.some((u) => u.email === userInfo.email)) {
        setErrMsg("Sorry,such user already exists");
      } else {
        axios
          .post(`http://localhost:3001/users`, userInfo)
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
          value={formData.firstName}
          validators={["required"]}
          errorMessages={["this field is required", "field can not be empty!"]}
        />
        <br />
        <TextValidator
          label="Surname"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
          validators={["required"]}
          errorMessages={["this field is required", "field can not be empty!"]}
        />
        <br />
        <TextValidator
          label="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
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
          value={formData.password}
        />
        <br />
        <TextValidator
          label="Repeat password"
          onChange={handleChange}
          name="repeatPass"
          type="password"
          validators={["isPasswordMatch", "required"]}
          errorMessages={["password mismatch", "this field is required"]}
          value={formData.repeatPass}
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
