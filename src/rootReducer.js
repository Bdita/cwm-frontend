import { combineReducers } from 'redux';

import screenReducer from '../src/ui/reducers/screenReducer';
import bookingReducer from '../src/booking/reducers/bookingReducer';
import dateAndTimeReducer from '../src/booking/reducers/dateAndTimeReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  screen: screenReducer,
  form: formReducer,
  booking: bookingReducer,
  dateAndTime: dateAndTimeReducer
});

export default rootReducer;
