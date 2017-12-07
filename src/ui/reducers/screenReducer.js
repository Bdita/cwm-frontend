import { SCREEN_RESIZE } from '../actions/screenActions';


const screenReducer = (state = {
  width: typeof window === 'object' ? window.innerWidth : null,
  height: typeof window === 'object' ? window.innerHeight : null,
  breakpoints: {
    small: 480,
    medium: 768,
    large: 1024
  }
}, action) => {
  switch (action.type) {
    case SCREEN_RESIZE:
      return Object.assign({}, state, {
        width: action.screenWidth,
        height: action.screenHeight
      });
    default:
      return state;
  }
};

export default screenReducer;
