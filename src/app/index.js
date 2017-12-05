import React, { Component } from 'react';
import Home from '../home/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const muiTheme = getMuiTheme({
  // spacing: spacing,
  // fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: colors.white,
    // primary2Color: colors.cyan700,
    // primary3Color: grey400,
    // accent1Color: colors.pink300,
    // accent2Color: colors.grey100,
    // accent3Color: colors.white,
    textColor: colors.darkBlack,
    selectedTextColor: colors.grey600,
    alternateTextColor: colors.darkBlack,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    // shadowColor: fullBlack,
  },
  appBar: {
    height: 55,
  },
});

class Index extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Index;
