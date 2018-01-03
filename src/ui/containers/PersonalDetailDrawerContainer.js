import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PersonalDetailDrawer from '../components/PersonalDetailDrawer';

class PersonalDetailContainer extends Component {
  render() {
    return (
      <div>
        <PersonalDetailDrawer screen={this.props.screen} />
      </div>
    );
  }
}

PersonalDetailContainer.propTypes = {
  screen: PropTypes.object
};

function mapStateToProps(state) {
  const newState = {
    screen: state.screen,
  };
  return newState;
}

export default connect(mapStateToProps)(PersonalDetailContainer);
