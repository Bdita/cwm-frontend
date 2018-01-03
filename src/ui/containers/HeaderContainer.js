import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class HeaderContainer extends Component {
  render() {
    return (
      <div>
        <Header screen={this.props.screen} />
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  screen: PropTypes.object
};

function mapStateToProps(state) {
  const newState = {
    screen: state.screen,
  };
  return newState;
}

export default connect(mapStateToProps)(HeaderContainer);
