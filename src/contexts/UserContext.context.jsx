import { createContext, useEffect, useReducer} from "react";
import {
  onAuthStateChangedListener,
  createUserDataFromAuth,
} from "../utils/Firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null, // initial values of both the properties are null
});

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  const {type,payload} = action;
  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
  }
}

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const {currentUser} = state;

  const setCurrentUser = (user) => {
    dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
  }
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
