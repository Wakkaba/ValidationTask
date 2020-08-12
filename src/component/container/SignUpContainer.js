import {setEmail, setFirstName, setLastName, setPassword, setRepeatPass,} from "../../data/redux /signUp/signUpAction";
import { connect } from "react-redux";
import SignUpPagerino from "../SignUpPagerino";
import React from "react";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => ({
  email: state.signup.getIn(["userData", "email"]),
  firstName: state.signup.getIn(["userData", "firstName"]),
  lastName: state.signup.getIn(["userData", "lastName"]),
  password: state.signup.getIn(["userData", "password"]),
  repeatPass: state.signup.getIn(["userData", "repeatPass"]),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setEmail,
      setFirstName,
      setLastName,
      setPassword,
      setRepeatPass,
    },
    dispatch
  );

const SignUpContainer = (props) => {
  console.log(props);
  return <SignUpPagerino {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
