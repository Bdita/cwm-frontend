import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import constants from '../config/string-constants.json';
import FaceIcon from 'material-ui/svg-icons/action/face';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import BookingIcon from 'material-ui/svg-icons/action/today';
import ArrowDownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

// import Logo from './Logo';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleFaceButtonClick = this.handleFaceButtonClick.bind(this);
  }

  handleFaceButtonClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
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
              onClick={this.handleFaceButtonClick}
            >
              <FaceIcon />
              <ArrowDownIcon />
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
                icon={<BookingIcon color="#ED5F59" />}
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
        <Drawer
          open={this.state.open}
          width="25%"
        >
          <IconButton onClick={this.handleFaceButtonClick}>
            <CloseIcon />
          </IconButton>
          <p> Test </p>
        </Drawer>
      </div>
    );
  }
}
export default Header;
