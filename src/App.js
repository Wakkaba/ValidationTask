import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Validation from "./component/Validation";
import "./App.css";
import DataFetching from "./component/DataFetching";

const theme = createMuiTheme({
  /* theme for v1.x */
  palette: {
    main: "#ff4400",
  },
  typography: {
    fontSize: 12,
  },
});

const App = () => {
  // let getUserInfo = (e) => {
  //     e.preventDefault();
  //     const user = e.target.elements.firstName.value
  //     console.log(user);
  // }
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        {/*<Validation getUserInfo={getUserInfo}/>*/}
        <Validation />
        <DataFetching />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
