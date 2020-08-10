import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Validation from "./component/container/SignUpContainer";
import "./App.css";
import DataFetching from "./component/DataFetching";
import { Provider as ReduxProvider } from "react-redux";
import store from "./data/redux /Store";

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
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Validation />
          <DataFetching />
        </div>
      </MuiThemeProvider>
    </ReduxProvider>
  );
};

export default App;
