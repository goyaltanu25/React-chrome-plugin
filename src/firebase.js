import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtT64aToSEHGrqS37Tr9fExeCIxNBT4ZM",
  authDomain: "mix-clone-app.firebaseapp.com",
  databaseURL: "https://mix-clone-app.firebaseio.com",
  projectId: "mix-clone-app",
  storageBucket: "mix-clone-app.appspot.com",
  messagingSenderId: "1038633663510",
  appId: "1:1038633663510:web:f055ac1de2f19d22894937",
  measurementId: "G-0GX24S6GNB",
};

//initialized auth and firestore
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google signin context
// const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => {
//   auth.signInWithPopup(provider);
// };

//email-pass signin context
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        email,
        displayName,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
