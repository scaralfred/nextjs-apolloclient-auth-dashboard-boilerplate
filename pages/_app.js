
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../lib/apolloClient'
import { AuthProvider } from '../hocs/Auth';
import { ToastContainer } from 'react-toastify';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/theme.scss';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {

  const apolloClient = useApollo(pageProps.initialApolloState)
  
  const CloseButton = ({closeToast}) => <i onClick={closeToast} className="la la-close notifications-close"/>

  return (
    <AuthProvider>
      <ToastContainer autoClose={5000} hideProgressBar closeButton={<CloseButton/>} />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
    </AuthProvider>
  )
}
