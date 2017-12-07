import { combineReducers } from 'redux';

import screenReducer from '../src/ui/reducers/screenReducer';


const rootReducer = combineReducers({
  screen: screenReducer,
});

export default rootReducer;
