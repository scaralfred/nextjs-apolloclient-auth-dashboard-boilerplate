import Nav from '../components/Navigation/Nav'
import Footer from '../components/Navigation/Footer'
import PostList, { ALL_POSTS_QUERY } from '../components/Home/PostList'
import { initializeApollo } from '../lib/apolloClient'
import withAuth from '../hocs/withAuth'

const Home = () => {

  return (
    <>
      <Nav/>
      <main>
        <h1>All Users Posts</h1>
      </main>
      <PostList />
      <Footer/>
    </>
  )

} 

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({ query: ALL_POSTS_QUERY })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  }
}

export default withAuth(Home)