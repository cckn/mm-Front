import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next'
import { entry } from './index.types'

interface show {
  id: string
  name: string
}

const Index: NextPage<{ shows: show[] }> = (props) => (
  <Layout>
    <h1>Batmat TV Shows</h1>
    <ul>
      {props.shows.map((show) => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return { shows: data.map((entry: entry) => entry.show) }
}

export default Index
