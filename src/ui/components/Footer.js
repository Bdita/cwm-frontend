import React, { Component } from 'react';
import PropTypes from 'prop-types';
import constants from '../../config/string-constants';
import Paper from 'material-ui/Paper';
import IconTwitter from 'react-devicon/twitter/original';

const style = {
  extraSmall: {
    height: 50,
    width: 50,
    margin: 25,
    textAlign: 'center',
    display: 'inline-block',
  },
  small: {
    height: 100,
    width: 100,
    marginRight: 15,
    marginLeft: 15,
    marinTop: -150,
    textAlign: 'center',
    display: 'inline-block',
  },
};

class Footer extends Component {
  render() {
    const screen = this.props.screen;

    let mediaIconsContainerWidth = '35%';
    let mediaIconsContainerMarginLeft = '39%';
    let mediaIconsContainerMarginRight = '39%';

    if (screen.width <= screen.breakpoints.large) {
      mediaIconsContainerWidth = '50%';
      mediaIconsContainerMarginLeft = '35%';
      mediaIconsContainerMarginRight = '35%';
    }

    return (
      <div style={{
        width: mediaIconsContainerWidth,
        marginLeft: mediaIconsContainerMarginLeft,
        marginRight: mediaIconsContainerMarginRight,
      }}
      >
        <div style={{
          marginTop: '5%',
          width: '65%',
          border: '1px solid red',
          display: 'flex',
        }}
        >
          <Paper
            style={style.extraSmall}
            zDepth={3}
            circle={true}
          >
            {<IconTwitter width={25} color="white" />}
          </Paper>
          <Paper
            style={style.small}
            zDepth={3}
            circle={true}
          >
            {constants.detail.test}
          </Paper>
          <Paper
            style={style.extraSmall}
            zDepth={3}
            circle={true}
          >
            {constants.detail.test}
          </Paper>
        </div>
      </div>
      // <div style={{
      //   width: '20%',
      //   marginTop: '1%',
      //   // border: '1px solid red',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      // }}
      // >
      //   <Paper
      //     style={style.extraSmall}
      //     zDepth={3}
      //     circle={true}
      //   >
      //     {constants.detail.test}
      //   </Paper>
      // </div>


    );
  }
}

Footer.propTypes = {
  screen: PropTypes.object
};
export default Footer;
