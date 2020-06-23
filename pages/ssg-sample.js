import InfoBox from '../components/Ssg/InfoBox'
import Submit from '../components/Ssg/Submit'
import PostList, { ALL_POSTS_QUERY, allPostsQueryVars, } from '../components/Ssg/PostList'
import { initializeApollo } from '../../lib/apolloClient'
import Nav from '../components/Navigation/Nav'

export default () => (
  <>
    <Nav />
    <InfoBox>ℹ️ This page shows how to use SSG with Apollo.</InfoBox>
    <Submit />
    <PostList />
  </>
)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  }
}