import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField, DatePicker, SelectField, MenuItem } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { getSelectedTimeSlot } from '../actions/dateAndTimeActions';

const validate = values => {
  const errors = {};
  const requiredFields = ['name', 'email', 'description', 'phone', 'company_name', 'meetup_location', 'date', 'time_slot'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address';
  }
  if (values.phone && !/^(?:\+?61|0)4 ?(?:(?:[01] ?[0-9]|2 ?[0-57-9]|3 ?[1-9]|4 ?[7-9]|5 ?[018]) ?[0-9]|3 ?0 ?[0-5])(?: ?[0-9]){5}$/i.test(values.phone)) {
    errors.phone = 'Invalid Mobile Number';
  }
  return errors;
};

const rendertimeSlotItems = values => {
  return values.map((value, i) => {
    return (
      <MenuItem key={i} value={value.time_slot} primaryText={value.time_slot} />
    );
  });
};

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    fullWidth={true}
    underlineShow={true}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderMultilineTextField = ({
  input,
  label,
  meta: { touched, error },
  custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    fullWidth={true}
    multiLine={true}
    rows={1}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderDateField = ({
  input,
  label,
  meta: { touched, error },
  getDate,
  minDate,
  maxDate,
  disableWeekends,
  custom,
}) => (
  <DatePicker
    hintText={label}
    floatingLabelText={label}
    fullWidth={true}
    errorText={touched && error}
    shouldDisableDate={disableWeekends}
    minDate={minDate}
    maxDate={maxDate}
    onChange={(event, date) => {
      input.onChange(date);
      getDate(date);
    }}
    {...custom}
  />
);

const renderDropdownList = ({
  input,
  label,
  meta: { touched, error },
  children,
  custom,
  getSelectedTime,
  availableTimeSlots
}) => (
  <SelectField
    floatingLabelText={label}
    fullWidth={true}
    errorText={touched && error}
    {...input}
    {...custom}
    onChange={(event, index, value) => {
      input.onChange(value);
      getSelectedTime(value, availableTimeSlots);
      }
    }
    children={children}
  />
);

const conditionalRenderTimeField = (timeSlots, props) => {
  if (timeSlots.length > 0) {
    return (
      <Field
        name="time_slot"
        component={renderDropdownList}
        label="Choose time"
        getSelectedTime={props.getSelectedTime}
        availableTimeSlots={props.availableTimeSlots}
      >
        {rendertimeSlotItems(timeSlots)}
      </Field>
    );
  }
};

let BookingReduxForm = (props) => {
  const { handleSubmit, timeSlots } = props;
  return (
    <div style={{
      width: '40%',
      marginLeft: '30%',
      marginRight: '30%',
      marginBottom: '5%',
      // border: '1px solid red',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <div style={{
        width: '70%',
        // border: '1px solid red',
      }}
      >
        <form onSubmit={handleSubmit}>
          <Field
            name="name"
            component={renderTextField}
            label="Name"
          />
          <Field
            name="email"
            component={renderTextField}
            label="Email"
          />
          <Field
            name="description"
            component={renderMultilineTextField}
            label="Tell me lil bit more about you"
          />
          <Field
            name="phone"
            component={renderTextField}
            label="Mobile No."
          />
          <Field
            name="company_name"
            component={renderTextField}
            label="Company/Business Name"
          />
          <Field
            name="meetup_location"
            component={renderTextField}
            label="Preferred Meeting Point"
          />
          <Field
            name="date"
            component={renderDateField}
            label="Select Date"
            getDate={props.getDate}
            minDate={props.minDate}
            maxDate={props.maxDate}
            disableWeekends={props.disableWeekends}
          />
          {conditionalRenderTimeField(timeSlots, props)}
          <div style={{
            marginLeft: '40%',
            marginTop: '7%'
          }}
          >
            <RaisedButton
              label="Submit"
              primary={true}
              type="submit"
              labelStyle={{
                color: 'white',
                fontWeight: 'bold'
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

BookingReduxForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  getDate: PropTypes.func,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  timeSlots: PropTypes.array,
  disableWeekends: PropTypes.func,
};
renderTextField.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  custom: PropTypes.string
};
renderMultilineTextField.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  custom: PropTypes.string
};
renderDateField.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  custom: PropTypes.string,
  getDate: PropTypes.func,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  disableWeekends: PropTypes.func
};

renderDropdownList.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  custom: PropTypes.string,
  children: PropTypes.array,
  getSelectedTime: PropTypes.func,
  availableTimeSlots: PropTypes.array
};

conditionalRenderTimeField.propTypes = {
  getSelectedTime: PropTypes.func,
  availableTimeSlots: PropTypes.array
};

function mapStateToProps(state) {
  const newState = {
    availableTimeSlots: [],
  };
  if (state.dateAndTime.availableTimeSlots !== undefined && state.dateAndTime.availableTimeSlots !== null) {
    Object.keys(state.dateAndTime.availableTimeSlots).forEach((key) => {
      newState.availableTimeSlots.push(state.dateAndTime.availableTimeSlots[key]);
    });
  }
  return newState;
}

const mapDispatchToProps = dispatch => ({
  getSelectedTime: (time, availableTimeSlots) => dispatch(getSelectedTimeSlot(time, availableTimeSlots))
});

BookingReduxForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingReduxForm);

export default BookingReduxForm = reduxForm({
  form: 'bookingReduxForm',
  validate,
})(BookingReduxForm);
