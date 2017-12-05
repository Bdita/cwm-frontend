import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from '../Home/Home.js';
import styles from './index.css';

class Index extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className={styles.root}>
          <h1> Hello </h1>
          <Home />
          <h1> test </h1>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Index;
