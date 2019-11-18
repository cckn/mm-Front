import Layout from '../../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next'
import { Show, entry } from '../index.types'

const Post: NextPage<any> = (props) => {
  const {
    show: {
      name,
      summary,
      image: { medium: image },
    },
  } = props
  return (
    <Layout>
      <h1>{name}</h1>
      <p>{summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img src={image} alt={name} />
    </Layout>
  )
}

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
