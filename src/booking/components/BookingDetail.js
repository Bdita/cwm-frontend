import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookingDetail extends Component {
  render() {
    return (
      <div>
        <p> {this.props.booking.id} </p>
      </div>
    );
  }
}

BookingDetail.propTypes = {
  booking: PropTypes.object,
};
export default BookingDetail;
