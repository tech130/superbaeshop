import {combineReducers} from 'redux';
import user from './user/user';

const reducer = combineReducers({
    user,
});

export default reducer;
