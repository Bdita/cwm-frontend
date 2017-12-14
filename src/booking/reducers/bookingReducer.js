import {
  MAKE_BOOKING_SUCCESS, MAKE_BOOKING_REQUEST,
  MAKE_BOOKING_FAILURE, GET_DATE_REQUEST,
  GET_DATE_SUCCESS, GET_DATE_FAILURE,
  GET_TIMESLOTS_SUCCESS } from '../actions/bookingActions';

const bookingReducer = (state = {
  isRequesting: false,
  details: {},
  error: {},
  selectedDate: {},
  availableTimeSlots: {}
}, action) => {
  switch (action.type) {
    case MAKE_BOOKING_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        details: {},
        error: {}
      });
    case MAKE_BOOKING_SUCCESS:
      return Object.assign({}, state, {
        isRequesting: false,
        details: action.details,
        error: {}
      });
    case MAKE_BOOKING_FAILURE:
      return Object.assign({}, state, {
        isRequesting: false,
        details: {},
        error: action.error
      });
    case GET_DATE_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        selectedDate: {},
        availableTimeSlots: {}
      });
    case GET_DATE_SUCCESS:
      return Object.assign({}, state, {
        isRequesting: false,
        selectedDate: action.date,
        availableTimeSlots: {}
      });
    case GET_DATE_FAILURE:
      return Object.assign({}, state, {
        isRequesting: false,
        selectedDate: {},
        availableTimeSlots: action.error
      });
    case GET_TIMESLOTS_SUCCESS:
      return Object.assign({}, state, {
        availableTimeSlots: action.timeSlots
      });
    default:
      return state;
  }
};

export default bookingReducer;
