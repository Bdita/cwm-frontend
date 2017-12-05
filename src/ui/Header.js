import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import constants from '../config/string-constants.json';
import Face from 'material-ui/svg-icons/action/face';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Booking from 'material-ui/svg-icons/action/today';
// import Logo from './Logo';

class Header extends Component {
  render() {
    return (
      <AppBar
        title={constants.title}
        iconElementLeft={
          <IconButton
            iconStyle={{
              width: 48,
              height: 48,
              marginTop: -12
            }}
            style={{
              width: 48,
              height: 48,
            }}
            disableTouchRipple={true}
          >
            <Face />
          </IconButton>
          }
        iconElementRight={
          <div style={{
            marginTop: 0
          }}
          >
            <FlatButton
              label={constants.book}
              labelPosition="before"
              primary={true}
              icon={<Booking color="#ED5F59" />}
              style={{
                height: 40,
                marginTop: 4,
              }}
              labelStyle={{
                color: '#767676',
              }}
            />
          </div>
        }
        titleStyle={{
          color: '#ED5F59',
          fontFamily: 'Lora',
          fontWeight: 'bold',
          fontStyle: 'italic',
          textAlign: 'center'
        }}
        style={{
          marginBottom: '15px',
          position: 'relative',
          zIndex: '0',
        }}
        iconStyleLeft={{
          color: '#767676'
        }}
      />
    );
  }
}
export default Header;
