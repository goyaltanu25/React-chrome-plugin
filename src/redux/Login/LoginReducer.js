import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  USER_DATA
} from "./LoginActionTypes";

export default function LoginReducer(
  state = {
    isLoginPending: true,
    isLoginSuccess: false,
    isLoginError: null,
    loginData: null,
    isUserLoggedIn: false,
    userData:null
  },
  action
) {
  // console.log("loginreducers-action", action);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.payload.isLoginSuccess,
        loginData: action.payload.loginData,
        isUserLoggedIn: action.payload.isUserLoggedIn,
      };

    case LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: action.isLoginPending,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        isLoginError: action.isLoginError,
      };
    case LOGOUT:
      return {
        ...state,
        isLoginSuccess: action.payload.isLoginSuccess,
        loginData: action.payload.loginData,
        isUserLoggedIn: action.payload.isUserLoggedIn,
      };
    case USER_DATA:
      return{
          ...state,
          userData: action.payload.userDetails
      }    
    default:
      return state;
  }
}
