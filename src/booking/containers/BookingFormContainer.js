import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookingForm from '../components/BookingForm';
import { makeBooking } from '../actions/bookingActions';
import { getDate } from '../actions/dateAndTimeActions';

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
        <BookingForm
          onSubmit={this.handleFormSubmit}
          getDate={this.props.getDateAndTimeSlots}
          timeSlots={this.props.availableTimeSlots}
        />
      </div>
    );
  }
}

BookingFormContainer.propTypes = {
  createBooking: PropTypes.func,
  getDateAndTimeSlots: PropTypes.func,
  availableTimeSlots: PropTypes.array
};

function mapStateToProps(state) {
  const newState = {
    booking: state.booking.details,
    selectedDate: state.dateAndTime.selectedDate,
    availableTimeSlots: []
  };
  if (state.dateAndTime.availableTimeSlots !== undefined && state.dateAndTime.availableTimeSlots !== null) {
    Object.keys(state.dateAndTime.availableTimeSlots).forEach((key) => {
      newState.availableTimeSlots.push(state.dateAndTime.availableTimeSlots[key]);
    });
  }
  return newState;
}

const mapDispatchToProps = dispatch => ({
  createBooking: (formProps) => dispatch(makeBooking(formProps)),
  getDateAndTimeSlots: (date) => dispatch(getDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingFormContainer);
