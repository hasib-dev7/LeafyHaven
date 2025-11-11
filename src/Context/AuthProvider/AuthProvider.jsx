import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  //  create new user
  const createUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign in user
  const signInUser = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update user profile
  const updateUserProfile=(updateUser)=>{
    return updateProfile(auth.currentUser,updateUser)
  }
  //   logout
  const logOut = () => {
    setAuthLoading(true);
    return signOut(auth);
  };
  //   the current user
  useEffect(() => {
    // the observer user
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
      console.log(currentUser);
    });
    // the observer unmount
    return () => {
      unsubscribe();
    };
  }, []);
  const userInfo = {
    user,
    setUser,
    authLoading,
    createUser,
    signInUser,
    updateUserProfile,
    logOut,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
