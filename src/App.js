import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Validation from "./component/container/SignUpContainer";
import "./App.css";
import DataFetching from "./component/DataFetching";
import { Provider as ReduxProvider } from "react-redux";
import store from "./data/redux /Store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./component/Navigation";
import '../public/favicon.ico';
const theme = createMuiTheme({
  palette: {
    main: "#ff4400",
  },
  typography: {
    fontSize: 12,
  },
});

const App = () => {
  return (
    <Router>
      <ReduxProvider store={store}>
        <MuiThemeProvider theme={theme}>
          <div>
            <NavBar />
            <Route exact path="/" component={Validation} />
            <Route patgit checkout  myFeature devh="/Users" component={DataFetching} />
          </div>
        </MuiThemeProvider>
      </ReduxProvider>
    </Router>
  );
};

export default App;
