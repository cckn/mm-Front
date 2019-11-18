import React from 'react'
import Link from 'next/link'

import Layout from '../components/MyLayout'

const PostLink: React.FC<{ id: string }> = (props) => (
  <li>
    <Link href={`/p/[id]`} as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs"></PostLink>
        <PostLink id="learn-nextjs"></PostLink>
        <PostLink id="deploy-nextjs"></PostLink>
      </ul>
    </Layout>
  )
}
