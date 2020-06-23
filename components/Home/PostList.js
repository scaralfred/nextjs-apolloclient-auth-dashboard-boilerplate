import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
  query allPosts {
    listPosts {
      id
      title
    }
  }
`

export default function PostList() {
  const { loading, error, data } = useQuery(ALL_POSTS_QUERY)


  if (error) return <div>Error loading posts.</div>
  if (loading) return <div>Loading</div>

  const { listPosts } = data

  return (
    <section>
      <ul>
        {listPosts.map((post, index) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href={post.url}>{post.title}</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
