import React, { Component } from 'react';
import { TextField, SelectField, DatePicker, TimePicker } from 'material-ui';

class BookingForm extends Component {
  render() {
    return (
      <div style={{
        width: '40%',
        marginLeft: '30%',
        marginRight: '30%',
        border: '1px solid red',
        display: 'flex'
      }}
      >
        <div style={{
          width: '80%',
          marginRight: '10%',
          marginLeft: '10%'
        }}
        >
          <form>
            <TextField hintText="What chore needs to be completed?" /><br />

            <SelectField /> <br />

            <DatePicker hintText="Date to be completed by" />
            <TimePicker hintText="Time to be completed by" />
          </form>
        </div>
      </div>
    );
  }
}

export default BookingForm;
