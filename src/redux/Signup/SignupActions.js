import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "./SignupActionTypes";
import { auth, generateUserDocument } from "../../firebase";

function setSignupSuccess(isSignupSuccess, SignupData) {
  return {
    type: SIGNUP_SUCCESS,
    payload: { isSignupSuccess, SignupData },
  };
}

function setSignupError(isSignupError) {
  return {
    type: SIGNUP_ERROR,
    isSignupError,
  };
}


export function signup(email, password, displayName, photoURL, props) {
  return async (dispatch) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, {displayName, photoURL});
      dispatch(setSignupSuccess(true, { user, displayName, photoURL }));
      props.history.push("/login");
    } catch (error) {
      dispatch(setSignupError(error));
      console.error("Error signing up with password and email", error);
    }
    dispatch(setSignupSuccess(false, null));
  };
}
