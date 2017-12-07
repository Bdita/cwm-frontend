import { screenResize } from './actions/screenActions';


const initUI = (store) => {
  window.addEventListener('resize', () => {
    store.dispatch(screenResize(window.innerWidth, window.innerHeight));
  });
  store.dispatch(screenResize(window.innerWidth, window.innerHeight));
};

export default initUI;
