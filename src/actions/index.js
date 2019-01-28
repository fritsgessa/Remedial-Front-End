import axios from 'axios';
import {
    USER_LOGIN_SUCCESS, 
    USER_NOT_FOUND, 
    LOGIN_SYSTEM_ERROR,
    LOGIN_LOADING, LOGOUT,
    REGISTER_LOADING,
    COOKIE_CHECKED,
    SELECT_POPOK,
    HARUS_DIISI,
    USERNAME_TIDAK_ADA,
    GET_USER_ID_SUCCESS
} from './types';
export const onUserLogout=()=>{
    return{type: LOGOUT }
}
export const keepLogin =(username)=>{
    return(dispatch)=> {
        axios.get('http://localhost:2019/keeplogin',{
            params:{
                username
            }
        }).then((res)=>{
            if(res.data.length > 0 ){
                dispatch({
                    type: USER_LOGIN_SUCCESS, payload: username
                })
            }
        })
    }
}
export const cookieChecked =()=>{
    return{type: COOKIE_CHECKED }
}
export const onUserLogin = ({username, password}) =>{
    return(dispatch)=>{
        if(username == '' || password == ''){
            return dispatch({type : HARUS_DIISI})
        }
        dispatch({type: LOGIN_LOADING})
        axios.post('http://localhost:2019/login', {
            username,
            password
        }).then((res)=> {
            console.log(res)
            if(res.data.length>0){
                dispatch({type: USER_LOGIN_SUCCESS, payload: username})
            }else{
                dispatch({type: USER_NOT_FOUND})
            }
        }).catch((err)=>{
            console.log(err)
            dispatch({type: LOGIN_SYSTEM_ERROR})
        }) 
    }
}
export const onUserRegister = ({username,email,phone, password})=>{
    return (dispatch)=>{
        dispatch({type: REGISTER_LOADING})
        if(username ==='' || password == '' || phone == ''||email==''){
            dispatch({type: HARUS_DIISI})
        }else{
            axios.get('http://localhost:2019/usercheck',{
                params:{
                    username
                }
            }).then((res)=>{
                if(res.data.length === 0 ){
                    axios.post('http://localhost:2019/register', {
                    username, email, password, phone
                    }).then((res)=>{
                        console.log(res)
                        dispatch({type: USER_LOGIN_SUCCESS, payload: username})
                    }).catch((err)=>{
                        console.log(err);
                        dispatch({type: LOGIN_SYSTEM_ERROR})
                    })
                }else{
                    dispatch({type: USERNAME_TIDAK_ADA})
                }
            }).catch((err)=>{
                dispatch({type: LOGIN_SYSTEM_ERROR})
            })
            
        }
        
    }
}
export const select_popok = (selectedPopok) => {
    return { 
        type: SELECT_POPOK,
        payload: selectedPopok
    }
}
export const keepUserId =(id)=>{
    return{
        type: GET_USER_ID_SUCCESS,
        payload:id
    }
}