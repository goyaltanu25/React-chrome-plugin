import { auth, getUserDocument } from "../../firebase";
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  USER_DATA
} from "./LoginActionTypes";

function setLoginPending(isLoginPending) {
  return {
    type: LOGIN_PENDING,
    isLoginPending,
  };
}

function setLoginSuccess(isLoginSuccess, loginData, isUserLoggedIn) {
  return {
    type: LOGIN_SUCCESS,
    payload: { isLoginSuccess, loginData, isUserLoggedIn },
  };
}

function setLoginError(isLoginError) {
  return {
    type: LOGIN_ERROR,
    isLoginError,
  };
}

function setLogout(isLoginSuccess, loginData, isUserLoggedIn) {
  return {
    type: LOGOUT,
    payload: { isLoginSuccess, loginData, isUserLoggedIn },
  };
}

function setUserDetails(res){
  let userDetails = {
    email: res.email,
    displayName: res.displayName,
    src: res.photoURL
  }
  return{
    type: USER_DATA,
    payload:{userDetails}
  }
}

export function login(email, password, props) {
  return (dispatch) => {
    dispatch(setLoginPending(false));
    dispatch(setLoginSuccess(false, null, false));
    dispatch(setLoginError(null));
      auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true, { email, password }, true));
        getUserDocument(res.user.uid).then((res)=>{
         dispatch(setUserDetails(res));
        })
        props.history.push("/profile/posts");
      })
      .catch ((error) => {
      console.log("login-error", error);
      dispatch(setLoginError(error));
      dispatch(setLoginPending(false));
      })
  };
}

export function logout() {
  return (dispatch) => {
    auth.signOut();
    console.log('signed out');
    dispatch(setLogout(false, null, false));
  };
  
}
