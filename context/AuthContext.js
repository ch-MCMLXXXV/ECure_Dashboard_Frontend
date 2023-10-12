import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(null);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [error, setError] = useState(null);

   const router = useRouter();

   useEffect(() => {
      if (!user) {
         loaduser();
      }
   }, [user]);

   //Login user
   const login = async ({ email, password }) => {
      try {
         setLoading(true);

         const res = await axios.post('api/auth/login/', {
            email,
            password,
         });

         if (res.data.sucess) {
            loaduser();
            setIsAuthenticated(true);
            setLoading(false);
            router.push('/');
         }
      } catch (error) {
         setLoading(false);
         setError(
            error.response &&
               (error.response.data.detail ||
                  error.response.data.error)
         );
      }
   };

   //Load user
   const loaduser = async () => {
      try {
         setLoading(true);

         const res = await axios.get('api/auth/user/');

         if (res.data.user) {
            setIsAuthenticated(true);
            setLoading(false);
            setUser(res.data.user);
         }
      } catch (error) {
         setLoading(false);
         setIsAuthenticated(false);
         setUser(null);
         setError(
            error.response &&
               (error.response.data.detail ||
                  error.response.data.error)
         );
      }
   };

   return (
      <AuthContext.Provider
         value={{
            user,
            isAuthenticated,
            loading,
            error,
            login,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContext;
