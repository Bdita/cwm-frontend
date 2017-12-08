import {
  MAKE_BOOKING_SUCCESS, MAKE_BOOKING_REQUEST,
  MAKE_BOOKING_FAILURE } from '../actions/bookingActions';

const bookingReducer = (state = {
  isRequesting: false,
  details: {},
  error: {}
}, action) => {
  switch (action.type) {
    case MAKE_BOOKING_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        details: {},
        error: {}
      });
    case MAKE_BOOKING_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        details: action.details,
        error: {}
      });
    case MAKE_BOOKING_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        details: {},
        error: action.error
      });
    default:
      return state;
  }
};

export default bookingReducer;
