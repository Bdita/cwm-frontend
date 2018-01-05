import 'whatwg-fetch';
// in production?
import config from '../../config/development';
import { extractDate } from '../../utils/helpers';
import _ from 'lodash';

// action types
export const GET_DATE_REQUEST = 'GET_DATE_REQUEST';
export const GET_DATE_SUCCESS = 'GET_DATE_SUCCESS';
export const GET_DATE_FAILURE = 'GET_DATE_FAILURE';
export const GET_TIMESLOTS_SUCCESS = 'GET_TIMESLOTS_SUCCESS';
export const GET_TIMESLOTS_FAILURE = 'GET_TIMESLOTS_FAILURE';
export const GET_SELECTEDTIMESLOT_SUCCESS = 'GET_SELECTEDTIMESLOT_SUCCESS';
export const UPDATE_TIMESLOT_REQUEST = 'UPDATE_TIMESLOT_REQUEST';
export const UPDATE_TIMESLOT_SUCCESS = 'UPDATE_TIMESLOT_SUCCESS';
export const UPDATE_TIMESLOT_FAILURE = 'UPDATE_TIMESLOT_FAILURE';

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

export function getTimeSlotsFailure(error) {
  return {
    type: GET_TIMESLOTS_FAILURE,
    error: error
  };
}

export function getSelectedTimeSlotSuccess(timeObj) {
  return {
    type: GET_SELECTEDTIMESLOT_SUCCESS,
    time: timeObj
  };
}

export function updateTimeSlotRequest(time) {
  return {
    type: UPDATE_TIMESLOT_REQUEST,
    params: time
  };
}

export function updateTimeSlotSuccess(json) {
  return {
    type: UPDATE_TIMESLOT_SUCCESS,
    time: json
  };
}

export function updateTimeSlotFailure(error) {
  return {
    type: UPDATE_TIMESLOT_FAILURE,
    error: error
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
    dispatch(getDateRequest(newDate));
    const dateEndPoint = `${config.api.endpoint}/api/dates/${newDate}/`;
    return fetch(dateEndPoint, {
      method: 'GET'
    })
      .then((response) => {
        if (response.status === 404) {
          throw Error('This date is not available for booking.');
        }
        return response.json();
      })
      .then((json) => {
        const selectedDate = json;
        const timeSlots = availableTimeSlots(selectedDate);
        if (_.isEmpty(timeSlots)) {
          dispatch(getTimeSlotsFailure('This date is booked out.'));
        } else {
          dispatch(getTimeSlotsSuccess(timeSlots));
        }
        dispatch(getDateSuccess(selectedDate, timeSlots));
      })
      .catch((error) => {
        dispatch(getDateFailure(error.message));
      });
  };
}

export function getSelectedTimeSlot(selectedTimeString, availableTimeObjects) {
  return (dispatch) => {
    let selectedTimeObject = null;
    availableTimeObjects.map((time) => {
      if (time.time_slot === selectedTimeString) {
        selectedTimeObject = time;
      }
    });
    dispatch(getSelectedTimeSlotSuccess(selectedTimeObject));
  };
}

// function to send patch request to update status timeSlot for which booking
// request is sent from available to on_process: invoke when booking action is success
export function updateTimeSlot(time) {
  return (dispatch) => {
    const updateStatusValue = {
      availability_status: 'on_process',
    };
    dispatch(updateTimeSlotRequest(time));
    const timeEndPoint = `${config.api.endpoint}/api/times/${time.id}/`;
    return fetch(timeEndPoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateStatusValue)
    })
      .then((response) => {
        if (response.status === 400) {
          const error = response.json();
          error.then((message) => {
            dispatch(updateTimeSlotFailure(message));
          });
        } else if (response.status === 200) {
          const responseObject = response.json();
          responseObject.then((obj) => {
            dispatch(updateTimeSlotSuccess(obj));
          });
        } else {
          throw Error('backendError');
        }
      })
      .catch((error) => {
        dispatch(updateTimeSlotFailure(error.message));
      });
  };
}
