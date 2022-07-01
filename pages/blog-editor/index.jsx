import React from 'react'
import dynamic from 'next/dynamic'

const BlogEditor = dynamic(() => import('../../components/BlogEditor'), {
  ssr: false,
})

export default function index() {
  return (
    <div>
      <BlogEditor />
    </div>
  )
}
