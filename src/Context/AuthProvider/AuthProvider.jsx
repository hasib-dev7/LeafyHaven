import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { AuthContext } from "./AuthContext";
import { useEffect } from "react";

const AuthProvider = ({ children }) => {
  //  create new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   logout
  const logOut = () => {
    return signOut(auth)
     
  };
  //   the current user
  useEffect(() => {
    // the observer user
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
    });
    // the observer unmount
    return () => {
      unsubscribe();
    };
  }, []);
  const userInfo = {
    createUser,
    signInUser,
    logOut,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
