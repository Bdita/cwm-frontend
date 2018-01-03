import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from '../components/Message';

class MessageContainer extends Component {
  render() {
    return (
      <div>
        <Message screen={this.props.screen} />
      </div>
    );
  }
}

MessageContainer.propTypes = {
  screen: PropTypes.object
};

function mapStateToProps(state) {
  const newState = {
    screen: state.screen,
  };
  return newState;
}

export default connect(mapStateToProps)(MessageContainer);
