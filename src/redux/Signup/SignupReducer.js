import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "./SignupActionTypes";

export default function SignupReducer(
  state = {
    isSignupError: null,
    isSignupSuccess: false,
    SignupData: null,
  
  },
  action
) {
  // console.log("signupreducers-actions", action);
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignupSuccess: action.payload.isSignupSuccess,
        SignupData: action.payload.SignupData,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        isSignupError: action.isSignupError,
      };

    default:
      return state;
  }
}
