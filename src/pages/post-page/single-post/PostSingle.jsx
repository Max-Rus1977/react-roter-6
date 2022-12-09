import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import cl from './PostSingle.module.css'

const PostSingle = () => {

  const { id } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
  }, [id])

  return (
    <div className={cl.boxSinglePost}>
      <h2>Это пост с ID {id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className={cl.boxLink}>
        <Link to={`/posts/${id}/edit`}>Редактировать ➣</Link>
      </div>
    </div>
  )
}

export default PostSingle