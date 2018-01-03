import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import constants from '../../config/string-constants';

const style = {
  small: {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },
  medium: {
    height: 200,
    width: 200,
    margin: 15,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#ED5F59'
  },
  large: {
    height: 295,
    width: 295,
    margin: 15,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#6f69ee'
  }
};

class PersonalDetailDrawer extends Component {
  render() {
    return (
      <div>
        <Paper
          style={style.small}
          zDepth={3}
          circle={true}
        >
          <img
            src="http://res.cloudinary.com/dihqhbf9i/image/upload/v1501820072/11951142_10206755264775458_2690845586774658783_n_xgjsn9.jpg"
            alt="developerphoto"
            style={{
              height: '100px',
              width: '100px',
              borderRadius: '50px',
            }}
          />
        </Paper>
        <Paper
          style={style.medium}
          zDepth={3}
          circle={true}
        >
          <div style={{
            fontSize: '13px',
            marginTop: '35%',
            fontFamily: 'Roboto Mono',
            color: 'white'
            }}
          >
            <div style={{
              textDecoration: 'underline',
              fontWeight: '700',
              fontFamily: 'Roboto Mono',
            }}
            >
              {constants.detail.title1}
            </div>
            <div style={{
              marginTop: '2%',
              fontWeight: '700',
              fontStyle: 'italic'
            }}
            >
              {constants.detail.about}
            </div>
          </div>
        </Paper>
        <Paper
          style={style.large}
          zDepth={3}
          circle={true}
        >
          <div style={{
            fontSize: '13px',
            marginTop: '30%',
            fontFamily: 'Roboto Mono',
            color: 'white'
            }}
          >
            <div style={{
              textDecoration: 'underline',
              fontWeight: '700',
              fontFamily: 'Roboto Mono',
            }}
            >
              {constants.detail.title2}
            </div>
            <div style={{
              marginTop: '2%',
              fontWeight: '700',
              fontStyle: 'italic'
            }}
            >
              {constants.detail.goal1}
            </div>
            <div style={{
              marginTop: '2%',
              fontWeight: '700',
              fontStyle: 'italic'
            }}
            >
              {constants.detail.goal2}
            </div>
            <div style={{
              marginTop: '2%',
              fontWeight: '700',
              fontStyle: 'italic'
            }}
            >
              {constants.detail.goal3}
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default PersonalDetailDrawer;
