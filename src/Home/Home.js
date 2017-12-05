import React, { Component } from 'react';
import config from '../config/string-constants.json';

class Home extends Component {
  render() {
    return (
      <div>
        <h1> From App </h1>
        {config.introduction.description}
      </div>
    );
  }
}

export default Home;
