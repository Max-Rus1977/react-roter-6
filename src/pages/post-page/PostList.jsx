import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PostItem from './post-item/PostItem'

const PostsPage = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=7')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  return (
    <div>
      <div className='bg-page bg-posts'></div>
      <div className='box-posts'>
        <h2 className='title-posts-page'>Страница постов</h2>
        <PostItem posts={posts} />
      </div>
      <Link className='link-add-post' to={'/posts/create'}>Add Post</Link>
    </div>
  )
}

export default PostsPage