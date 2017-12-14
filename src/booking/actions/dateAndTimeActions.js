import 'whatwg-fetch';
// in production?
import config from '../../config/development';
import { extractDate } from '../../utils/helpers';

// action types
export const GET_DATE_REQUEST = 'GET_DATE_REQUEST';
export const GET_DATE_SUCCESS = 'GET_DATE_SUCCESS';
export const GET_DATE_FAILURE = 'GET_DATE_FAILURE';
export const GET_TIMESLOTS_SUCCESS = 'GET_TIMESLOTS_SUCCESS';

export function getDateRequest(date) {
  return {
    type: GET_DATE_REQUEST,
    params: date
  };
}

export function getDateSuccess(json, timeSlots) {
  return {
    type: GET_DATE_SUCCESS,
    date: json,
    timeSlots: timeSlots
  };
}

export function getDateFailure(error) {
  return {
    type: GET_DATE_FAILURE,
    error: error
  };
}

export function getTimeSlotsSuccess(timeSlots) {
  return {
    type: GET_TIMESLOTS_SUCCESS,
    timeSlots: timeSlots
  };
}

export function availableTimeSlots(date) {
  const timeSlots = {};
  date.times.map(time => {
    if (time.availability_status === 'available') {
      timeSlots[time.id] = {
        id: time.id,
        availability_status: time.availability_status,
        date_id: time.date_id,
        time_slot: time.time_slot
      };
    }
  });
  return timeSlots;
}

export function getDate(date) {
  return (dispatch) => {
    const newDate = extractDate(date);
    // console.log(newDate);
    dispatch(getDateRequest(newDate));
    const dateEndPoint = `${config.api.endpoint}/api/dates/${newDate}/`;
    return fetch(dateEndPoint, {
      method: 'GET'
    })
      .then((response) => {
        if (response.status === 404) {
          throw Error('404Error');
        }
        return response.json();
      })
      .then((json) => {
        const selectedDate = json;
        const timeSlots = availableTimeSlots(selectedDate);
        dispatch(getDateSuccess(selectedDate, timeSlots));
      })
      .catch((error) => {
        dispatch(getDateFailure(error.message));
      });
  };
}
