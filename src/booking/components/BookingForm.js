import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { TextField, DatePicker } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';

const validate = values => {
  const errors = {};
  const requiredFields = ['name', 'email', 'description', 'phone', 'company_name', 'date', 'time_slot'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
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
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderDateField = ({
  input,
  label,
  meta: { touched, error },
  custom
}) => (
  <DatePicker
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    onChange={(event, date) => input.onChange(date)}
    {...custom}
  />
);

let BookingReduxForm = (props) => {
  const { handleSubmit } = props;
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
        width: '60%',
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
            component={renderTextField}
            label="Tell me lil bit more about you"
            multiLine={true}
            rows={3}
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
            name="date"
            component={renderDateField}
            label="Select Date"
          />
          <Field
            name="time_slot"
            component={renderTextField}
            label="time slot"
          />
          <RaisedButton
            label="Submit"
            primary={true}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

BookingReduxForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
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

renderDateField.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  custom: PropTypes.string
};

export default BookingReduxForm = reduxForm({
  form: 'bookingReduxForm',
  validate,
})(BookingReduxForm);
