import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import constants from '../config/string-constants';

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
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#ED5F59'
  },
  large: {
    height: 300,
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
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
          <div style={{
            fontSize: '13px',
            }}
          >
            {constants.detail.name}
          </div>
        </Paper>
        <Paper
          style={style.medium}
          zDepth={5}
          circle={true}
        >
          <div style={{
            fontSize: '14px',
            marginTop: '45%',
            }}
          >
            {constants.detail.about}
          </div>
        </Paper>
        <Paper
          style={style.large}
          zDepth={5}
          circle={true}
        />
      </div>
    );
  }
}

export default PersonalDetailDrawer;
