import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDataFromAuth,
} from "../utils/Firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null, // initial values of both the properties are null
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }; // in order to let the children inside the provider access the 'currentUser' and 'setCurrentUser', we are storing them inside this 'value' object and then passing this object in the Provider's jsx

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDataFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
