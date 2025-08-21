// Import React and the Hooks we need here 
import React, { useState, useEffect, useContext } from "react";
// Import the Util function we created to handle the reading from the local storage 
import getAuth from '../util/auth';
// Create a context object  
const AuthContext = React.createContext();

// Create a custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
}
// Create a provider component  
export const AuthProvider = ( { children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setuser] = useState(null);

  const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, user };

  useEffect(() => {
    // Retrieve the logged in user from local storage
    const loggedInuser = getAuth();
    // console.log(loggedInuser);
    loggedInuser.then((response) => {
      // console.log(response);
      if (response.user_token) {
        setIsLogged(true);
        // 3 is the user_role for admin
        if (response.user_role === "admin") {
          setIsAdmin(true);
        }
        setuser(response);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

