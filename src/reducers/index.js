import {combineReducers} from 'redux';
import AuthReducers from './AuthReducers';
import SelectId from './SelectId'
export default combineReducers({
  id_user:()=>1,
  auth: AuthReducers,
  getId : SelectId
});

