import {
  GET_DATE_REQUEST, GET_DATE_SUCCESS,
  GET_DATE_FAILURE, GET_SELECTEDTIMESLOT_SUCCESS,
  GET_TIMESLOTS_SUCCESS, GET_TIMESLOTS_FAILURE } from '../actions/dateAndTimeActions';

const dateAndTimeReducer = (state = {
  isRequesting: false,
  selectedDate: {},
  error: {},
  availableTimeSlots: {},
  timeSlotsError: {},
  selectedTime: {}
}, action) => {
  switch (action.type) {
    case GET_DATE_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        selectedDate: {},
        error: {},
        availableTimeSlots: {}
      });
    case GET_DATE_SUCCESS:
      return Object.assign({}, state, {
        isRequesting: false,
        selectedDate: action.date,
        error: {},
        availableTimeSlots: action.timeSlots,
      });
    case GET_DATE_FAILURE:
      return Object.assign({}, state, {
        isRequesting: false,
        selectedDate: {},
        timeSlotsError: action.error,
        availableTimeSlots: {}
      });
    case GET_TIMESLOTS_SUCCESS:
      return Object.assign({}, state, {
        timeSlotsError: {},
      });
    case GET_TIMESLOTS_FAILURE:
      return Object.assign({}, state, {
        isRequesting: false,
        timeSlotsError: action.error,
      });
    case GET_SELECTEDTIMESLOT_SUCCESS:
      return Object.assign({}, state, {
        isRequesting: false,
        selectedTime: action.time
      });
    default:
      return state;
  }
};

export default dateAndTimeReducer;
