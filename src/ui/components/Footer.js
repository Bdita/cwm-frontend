import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconTwitter from 'react-devicon/twitter/original';
import IconLinkedin from 'react-devicon/linkedin/plain-wordmark';
import IconGithub from 'react-devicon/github/original';

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
          marginTop: '15%',
          width: '65%',
          // border: '1px solid red',
          display: 'flex',
        }}
        >
          <div
            style={style.extraSmall}
          >
            <a href="https://twitter.com/BanditaSAcharya?lang=en">
              {<IconTwitter width={50} />}
            </a>
          </div>
          <div
            style={style.small}
          >
            <a href="https://www.linkedin.com/in/bandita-sharma-ab54aab2/">
              {<IconLinkedin width={100} />}
            </a>
          </div>
          <div
            style={style.extraSmall}
          >
            <a href="https://github.com/Bdita">
              {<IconGithub width={50} />}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  screen: PropTypes.object
};
export default Footer;
