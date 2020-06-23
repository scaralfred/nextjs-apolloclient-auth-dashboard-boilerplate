import Link from 'next/link'
import styles from './nav.module.css'
import { useIsAuthenticated } from '../../../hocs/Auth'
import Router from 'next/router'

/**
 * The approach used in this component shows how to built a sign in and sign out
 * component that works on pages which support both client and server side
 * rendering, and avoids any flash incorrect content on initial page load.
 **/
export default () => {

  const isAuthenticated = useIsAuthenticated()
  const userImage = useIsAuthenticated().user && useIsAuthenticated().user.image ? useIsAuthenticated().user.image : "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
  const userEmail = useIsAuthenticated().user && useIsAuthenticated().user.email ? useIsAuthenticated().user.email : 'user@email.com'

  const goToProfile = () => Router.push('/profile/dashboard')

  return (
    <nav>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <p className={`nojs-show ${!isAuthenticated ? styles.loading : styles.loaded}`}>
      {!isAuthenticated && <>
          <span className={styles.notSignedIn}>Not signed in</span>
          <Link href="/auth/login">
            <a>
              <button className={styles.signinButton}>Sign in</button>
            </a>
          </Link>
        </>} 
        {isAuthenticated && <>
          <span onClick={goToProfile} style={{backgroundImage: `url(${userImage})`, cursor: "pointer" }} className={styles.avatar}/>
          <span className={styles.signedIn}>Signed in as <strong>{userEmail}</strong></span>
          <Link href="/auth/logout">
            <a>
              <button className={styles.signoutButton}>Sign out</button>
            </a>
          </Link>
        </>}
      </p>
    </nav>
  )
}