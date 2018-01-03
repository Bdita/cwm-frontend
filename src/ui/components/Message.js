import React, { Component } from 'react';
import constants from '../../config/string-constants';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Logo from './Logo';

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
            width: '100%',
            fontSize: '20px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center'
            // border: '1px solid red',
          }}
          >
            {constants.introduction.slogan1}
          </div>
          <div style={{
            marginTop: '5%',
          }}
          >
            {constants.introduction.description1}
          </div>
          <div style={{
            marginTop: '5%',
          }}
          >
            {constants.introduction.description2}
          </div>
          <div style={{
            marginTop: '5%',
          }}
          >
            {constants.introduction.description3}
          </div>
          <div style={{
            marginTop: '5%',
            fontSize: '20px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center'
          }}
          >
            {constants.introduction.description4}
          </div>
          <div style={{
            marginTop: '5%',
            textAlign: 'center'
          }}
          >
            {constants.introduction.description5}
          </div>
          <div style={{
            fontSize: '20px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center'
          }}
          >
            {constants.introduction.description6}{<Logo />}
          </div>
          <div style={{
            marginTop: '5%',
          }}
          >
            <Link to="/booking">
              <RaisedButton
                label="Click here to make a booking"
                labelPosition="after"
                primary={true}
                // icon={<Logo />}
                style={{
                  height: 45,
                  marginBottom: 15,
                }}
                labelStyle={{
                  // marginTop: '-5%',
                  color: 'white'
                }}
              />
            </Link>
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
