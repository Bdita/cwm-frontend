import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingDetail from '../components/BookingDetail';
import { getBooking } from '../actions/bookingActions';

class BookingDetailContainer extends Component {
  componentDidMount() {
    this.props.getBooking(this.props.match.params.bookingId);
  }

  render() {
    const { booking } = this.props;
    return (
      <div>
        <BookingDetail booking={booking} />
      </div>
    );
  }
}

BookingDetailContainer.propTypes = {
  booking: PropTypes.object,
  getBooking: PropTypes.func,
  match: PropTypes.object
};

function mapStateToProps(state) {
  const newState = {
    booking: state.booking.details,
  };
  return newState;
}

const mapDispatchToProps = dispatch => ({
  getBooking: (id) => dispatch(getBooking(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookingDetailContainer));
