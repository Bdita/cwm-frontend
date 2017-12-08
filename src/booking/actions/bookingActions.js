import 'whatwg-fetch';
// in production?
import config from '../../config/development';

// action types
export const MAKE_BOOKING_REQUEST = 'MAKE_BOOKING_REQUEST';
export const MAKE_BOOKING_SUCCESS = 'MAKE_BOOKING_SUCCESS';
export const MAKE_BOOKING_FAILURE = 'MAKE_BOOKING_FAILURE';

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

export function makeBooking(formProps) {
  return (dispatch) => {
    dispatch(makeBookingRequest(formProps));
    const bookingEndpoint = `${config.api.endpoint}/api/bookings/`;
    return fetch(bookingEndpoint, {
      method: 'POST',
      body: JSON.stringify(formProps)
    })
      .then((response) => {
        if (response.status === 400) {
          dispatch(makeBookingFailure(response));
          throw Error('404Error');
        }
        return response.json();
      })
      .then((json) => {
        dispatch(makeBookingSuccess(json));
      })
      .catch((error) => {
        dispatch(makeBookingFailure(error.message));
      });
  };
}
