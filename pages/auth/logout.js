  
import { useEffect } from 'react';
import { useAuth } from '../../hocs/Auth';
import withAuth from '../../hocs/withAuth';

export default withAuth(function Logout() {
  const { setAuthenticated } = useAuth();
  useEffect(() => {
    async function doLogout() {
      localStorage.removeItem('token')
      setAuthenticated(false);
      // const response = await fetch('/api/logout');
      // if (response.status === 200) {
      //   setAuthenticated(false);
      // } else {
      //   console.error('Failed to logout', response);
      // }
    }
    doLogout();
  }, [setAuthenticated]);
  return <p>Logging out...</p>;
}, '/');