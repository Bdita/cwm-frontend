import React, { Component } from 'react';
import constants from '../../config/string-constants';
import Paper from 'material-ui/Paper';

const style = {
  extraSmall: {
    height: 50,
    width: 50,
    margin: 15,
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

// TO DO: images inside the papers, links for social media
// TO DO: refactor social media paper elements into footer component
class Message extends Component {
  render() {
    return (
      <div style={{
        width: '40%',
        marginLeft: '30%',
        marginRight: '30%',
      }}
      >
        <div style={{
          color: '#5e5e5e',
          // border: '1px solid red',
          padding: '10%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        >
          <div style={{
            // marginTop: '20%',
            width: '100%',
            fontSize: '20px',
            fontStyle: 'italic',
            textAlign: 'center'
            // border: '1px solid red',
          }}
          >
            {constants.introduction.slogan}
          </div>
          <div style={{
            marginTop: '75%',
            width: '65%',
            // border: '1px solid red',
            display: 'flex',
          }}
          >
            <Paper
              style={style.extraSmall}
              zDepth={3}
              circle={true}
            >
              {constants.detail.test}
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
          <div style={{
            width: '20%',
            marginTop: '1%',
            // border: '1px solid red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Paper
              style={style.extraSmall}
              zDepth={3}
              circle={true}
            >
              {constants.detail.test}
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
