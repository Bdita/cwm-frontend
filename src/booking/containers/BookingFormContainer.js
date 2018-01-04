import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookingForm from '../components/BookingForm';
import { withRouter } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';
import { makeBooking } from '../actions/bookingActions';
import { getDate } from '../actions/dateAndTimeActions';
import _ from 'lodash';
import { convertObjectValuesToArray, errorMessageString } from '../../utils/helpers';

class BookingFormContainer extends Component {
  constructor(props) {
    super(props);
    const minDate = new Date();
    const maxDate = new Date();
    minDate.setDate(15);
    minDate.setMonth(12);
    minDate.setYear(2018);
    maxDate.setDate(19);
    maxDate.setMonth(12);
    maxDate.setYear(2018);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleBookingSuccess = this.handleBookingSuccess.bind(this);
    this.disableWeekends = this.disableWeekends.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.bookingSuccess === false && nextProps.bookingSuccess === true)
    && (_.isEmpty(this.props.booking) === true && _.isEmpty(nextProps.booking) === false)) {
      const bookingId = nextProps.booking.id;
      this.handleBookingSuccess(bookingId);
    }
  }

  handleFormSubmit(formProps) {
    this.props.createBooking(formProps);
  }

  handleBookingSuccess(bookingId) {
    this.props.history.push(`${bookingId}`);
  }

  disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  render() {
    const bookingError = this.props.error;
    const hasError = !_.isEmpty(bookingError);
    let errorBar = null;
    if (hasError) {
      const errorMessages = convertObjectValuesToArray(bookingError);
      const errorString = errorMessageString(errorMessages);
      errorBar = (
        <Snackbar
          open={true}
          message={errorString}
          autoHideDuration={5000}
          contentStyle={{
            color: 'white'
          }}
          bodyStyle={{
            height: 'auto',
            lineHeight: '28px',
            padding: 24,
            whiteSpace: 'pre-line'
          }}
          // onRequestClose={this.props.clearGeocodeError}
        />
      );
    }

    return (
      <div>
        <BookingForm
          onSubmit={this.handleFormSubmit}
          getDate={this.props.getDateAndTimeSlots}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          timeSlots={this.props.availableTimeSlots}
          disableWeekends={this.disableWeekends}
        />
        {errorBar}
      </div>
    );
  }
}

BookingFormContainer.propTypes = {
  createBooking: PropTypes.func,
  bookingSuccess: PropTypes.bool,
  getDateAndTimeSlots: PropTypes.func,
  availableTimeSlots: PropTypes.array,
  history: PropTypes.object,
  booking: PropTypes.object,
  error: PropTypes.object
};

function mapStateToProps(state) {
  const newState = {
    booking: state.booking.details,
    selectedDate: state.dateAndTime.selectedDate,
    bookingSuccess: state.booking.isSuccess,
    error: state.booking.error,
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookingFormContainer));
