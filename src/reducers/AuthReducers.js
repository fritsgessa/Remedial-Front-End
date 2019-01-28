import {
    USER_LOGIN_SUCCESS,
    USER_NOT_FOUND,
    LOGIN_SYSTEM_ERROR,
    LOGIN_LOADING,
    LOGOUT,
    COOKIE_CHECKED,
    HARUS_DIISI,
    USERNAME_TIDAK_ADA,
    GET_USER_ID_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    id:0,
    username: '',
    error: '',
    email:'',
    loading: false,
    cookie: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { ...INITIAL_STATE,
                username: action.payload,
                cookie:true,
                id:action.number
            };
        case USER_NOT_FOUND:
            return { ...INITIAL_STATE,
                error: 'Username or Password invalid'
            }
        case LOGIN_SYSTEM_ERROR:
            return { ...INITIAL_STATE,
                error: 'System Error'
            }
        case USERNAME_TIDAK_ADA:
            return{...INITIAL_STATE,
            error : 'Username tidak ada'}
        case HARUS_DIISI:
            return{...INITIAL_STATE,
            error : 'Form harus diisi semua'}
            case LOGIN_LOADING :
                return{...state, loading: true}
            case LOGOUT :
                return{...state,cookie: true}
            case COOKIE_CHECKED :
                return{...state,cookie: true}
        default:
            return state;
    }
}