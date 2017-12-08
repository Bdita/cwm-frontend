import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookingForm from '../components/BookingForm';
import { makeBooking } from '../actions/bookingActions';

class BookingFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(formProps) {
    this.props.createBooking(formProps);
  }

  render() {
    return (
      <div>
        <BookingForm onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

BookingFormContainer.propTypes = {
  createBooking: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    booking: state.booking.details
  };
}

const mapDispatchToProps = dispatch => ({
  createBooking: (formProps) => dispatch(makeBooking(formProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingFormContainer);
