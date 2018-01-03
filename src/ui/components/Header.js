import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PersonalDetailDrawer from '../containers/PersonalDetailDrawerContainer';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import constants from '../../config/string-constants.json';
import FaceIcon from 'material-ui/svg-icons/action/face';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import BookingIcon from 'material-ui/svg-icons/action/today';
import ArrowDownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';

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
    const screen = this.props.screen;

    let sideDrawerWidth = '23%';
    let sideDrawerMarginTop = '6%';

    if (screen.width <= screen.breakpoints.large) {
      sideDrawerWidth = '32%';
      sideDrawerMarginTop = '8%';
    }

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
              <Link to="/booking">
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
                    color: '#767676'
                  }}
                />
              </Link>
            </div>
          }
          titleStyle={{
            color: '#ED5F59',
            fontFamily: 'Lora',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
          style={{
            marginBottom: '15px',
            position: 'relative',
            zIndex: '0',
            backgroundColor: 'white',
          }}
          iconStyleLeft={{
            color: '#767676'
          }}
        />
        <Drawer
          open={this.state.open}
          width={sideDrawerWidth}
          height={20}
          containerStyle={{
            marginTop: sideDrawerMarginTop,
            boxShadow: 'none'
          }}
        >
          <PersonalDetailDrawer />
        </Drawer>
      </div>
    );
  }
}

Header.propTypes = {
  screen: PropTypes.object
};

export default Header;
