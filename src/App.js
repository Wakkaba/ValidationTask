import React from 'react';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Validation from "./component/Validation";
import './App.css';


const theme = createMuiTheme({
    /* theme for v1.x */
    palette: {
        main: '#ff4400'
    },
    typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontSize: 12,
    },

});

const App = () => {
  return (
      <MuiThemeProvider theme={theme} >
      <div className="App">
        <Validation/>
      </div>
      </MuiThemeProvider>
  );
}


export default App;
