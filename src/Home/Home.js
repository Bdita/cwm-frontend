import React, { Component } from 'react';
// import config from '../config/string-constants.json';
import Header from '../ui/Header';
import Message from '../ui/Message';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Message />
      </div>
    );
  }
}

export default Home;
