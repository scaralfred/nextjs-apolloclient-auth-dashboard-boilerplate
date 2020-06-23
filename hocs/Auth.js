import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { createApolloClient } from '../lib/apolloClient';

export const ME = gql`
  query CheckAuth {
    me {
      id
    }
  }
`
const AuthContext = React.createContext({
  isAuthenticated: false,
  setAuthenticated: () => {}
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  createApolloClient()
  .query({ 
    query: gql `
    {
      me {
        id
      }
    }
  `})
  .then(d => { 
    console.log('AUTHORIZED :)')
    setAuthenticated(true); 
    setLoading(false); 
  })
  .catch(e => { 
    // console.log(JSON.stringify(e)); 
    setAuthenticated(false); 
    setLoading(false); 
  })
  
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        setAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useIsAuthenticated() {
  const context = useAuth();
  return context.isAuthenticated;
}