import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import indexRoutes from "./routes/index.jsx";

// import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5ddef4',
      main: '#00ACC1',
      dark: '#007c91',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffbcaf',
      main: '#ff8a80',
      dark: '#c85a54',
      contrastText: '#000',
    },
  },
});

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <MuiThemeProvider theme={theme}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);
