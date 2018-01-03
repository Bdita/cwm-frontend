import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';

class FooterContainer extends Component {
  render() {
    return (
      <div>
        <Footer screen={this.props.screen} />
      </div>
    );
  }
}

FooterContainer.propTypes = {
  screen: PropTypes.object
};

function mapStateToProps(state) {
  const newState = {
    screen: state.screen,
  };
  return newState;
}

export default connect(mapStateToProps)(FooterContainer);
