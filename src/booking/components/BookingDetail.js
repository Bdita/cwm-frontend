import React, { Component } from 'react';
import PropTypes from 'prop-types';
import constants from '../../config/string-constants';

class BookingDetail extends Component {
  render() {
    return (
      <div style={{
        width: '40%',
        marginLeft: '30%',
        marginRight: '30%',
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <div style={{
          width: '100%',
          marginTop: '5%',
          // border: '1px solid red',
        }}
        >
          <p> {constants.bookingInfo.bookingSuccess} </p>
          <div style={{
            width: '100%',
            marginTop: '5%',
            // border: '1px solid red',
          }}
          >
            <p> {constants.bookingInfo.bookingDetail}  </p>
            <div style={{
              marginTop: '2%',
              // border: '1px solid red',
            }}
            >
              <p> {constants.bookingInfo.date} {this.props.booking.date} </p>
              <p> {constants.bookingInfo.time} {this.props.booking.time_slot} </p>
              <p> {constants.bookingInfo.location} {this.props.booking.meetup_location} </p>
            </div>
            <div style={{
              width: '100%',
              marginTop: '5%',
              // border: '1px solid red',
            }}
            >
              <p> {constants.bookingInfo.bookingConfirmation} </p>
            </div>
            <div style={{
              width: '100%',
              marginTop: '5%',
              // border: '1px solid renderMultilineTextField',
            }}
            >
              <p> {constants.bookingInfo.farewellMessage} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BookingDetail.propTypes = {
  booking: PropTypes.object,
};
export default BookingDetail;
