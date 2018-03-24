import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import contact from './contact';

export default combineReducers({
  // contact,
  form: formReducer
});
