import React from 'react';
import constants from '../config/string-constants';
import LogoImage from '../static/icons/coffee.png';

class Logo extends React.Component {
  render() {
    return (
      <img
        src={LogoImage}
        alt={constants.title}
        style={{
          height: '60px',
          width: '60px',
        }}
      />
    );
  }
}

export default Logo;
