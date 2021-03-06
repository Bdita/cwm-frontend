import 'whatwg-fetch';
// in production?
import config from '../../config/development';
import { extractDate } from '../../utils/helpers';

// action types
export const MAKE_BOOKING_REQUEST = 'MAKE_BOOKING_REQUEST';
export const MAKE_BOOKING_SUCCESS = 'MAKE_BOOKING_SUCCESS';
export const MAKE_BOOKING_FAILURE = 'MAKE_BOOKING_FAILURE';
export const GET_BOOKING_REQUEST = 'GET_BOOKING_REQUEST';
export const GET_BOOKING_SUCCESS = 'GET_BOOKING_SUCCESS';
export const GET_BOOKING_FAILURE = 'GET_BOOKING_FAILURE';

// action creators
export function makeBookingRequest(params) {
  return {
    type: MAKE_BOOKING_REQUEST,
    params: params
  };
}

export function makeBookingSuccess(json) {
  return {
    type: MAKE_BOOKING_SUCCESS,
    details: json
  };
}

export function makeBookingFailure(error) {
  return {
    type: MAKE_BOOKING_FAILURE,
    error: error
  };
}

export function getBookingRequest(id) {
  return {
    type: GET_BOOKING_REQUEST,
    params: id
  };
}

export function getBookingSuccess(json) {
  return {
    type: GET_BOOKING_SUCCESS,
    details: json
  };
}

export function getBookingFailure(error) {
  return {
    type: GET_BOOKING_FAILURE,
    error: error
  };
}

export function makeBooking(formProps) {
  return (dispatch) => {
    const newDate = extractDate(formProps.date);
    const updatedFormValues = {
      name: formProps.name,
      email: formProps.email,
      description: formProps.description,
      phone: formProps.phone,
      company_name: formProps.company_name,
      meetup_location: formProps.meetup_location,
      date: newDate,
      time_slot: formProps.time_slot
    };
    dispatch(makeBookingRequest(updatedFormValues));
    const bookingEndpoint = `${config.api.endpoint}/api/bookings/`;
    return fetch(bookingEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFormValues)
    })
      .then((response) => {
        if (response.status === 400) {
          const error = response.json();
          error.then((message) => {
            dispatch(makeBookingFailure(message));
          });
        } else if (response.status === 201) {
          const responseObject = response.json();
          responseObject.then((obj) => {
            dispatch(makeBookingSuccess(obj));
          });
        } else {
          throw Error('backendError');
        }
      })
      .catch((error) => {
        dispatch(makeBookingFailure(error.message));
      });
  };
}

export function getBooking(id) {
  return (dispatch) => {
    dispatch(getBookingRequest(id));
    const singleBookingEndpoint = `${config.api.endpoint}/api/bookings/${id}`;
    return fetch(singleBookingEndpoint, {
      method: 'GET'
    })
      .then((response) => {
        if (response.status === 404) {
          throw Error('404: NotFound');
        }
        return response.json();
      })
      .then((json) => {
        dispatch(getBookingSuccess(json));
      })
      .catch((error) => {
        dispatch(getBookingFailure(error.message));
      });
  };
}
