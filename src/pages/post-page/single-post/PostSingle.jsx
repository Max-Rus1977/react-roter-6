import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import cl from './PostSingle.module.css'

const PostSingle = () => {

  const { id } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
  }, [id])

  const navigate = useNavigate()
  const goHome = () => navigate('/', { replace: true, state: id })

  return (
    <div className={cl.boxSinglePost}>
      <button
        className={cl.btnHom}
        onClick={goHome}
      >
        🏠 Go hom
      </button>
      <h2>Это пост с ID {id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className={cl.boxBtnLink}>
        <div className={cl.boxLink}>
          <Link to={`/posts`}>
            <span className={cl.rightArrow}>➣</span>
            Назад
          </Link>
        </div>
        <div className={cl.boxLink}>
          <Link to={`/posts/${id}/edit`}>Редактировать ➣</Link>
        </div>
      </div>
    </div>
  )
}

export default PostSingle