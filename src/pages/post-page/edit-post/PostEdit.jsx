import { Link, useParams } from 'react-router-dom'
import cl from './PostEdit.module.css'

const PostCreate = () => {

  const { id } = useParams()

  return (
    <div className={cl.box}>
      <h2>Редактирование поста с ID {id}</h2>
      <input type="text" />
      <input type="text" />
      <div className={cl.navigate}>
        <Link to={`/posts/${id}`}>
          <span className={cl.arrowRight}>➣</span>
          Вернуться к посту
        </Link>
        <button>ADD</button>
      </div>
    </div>
  )
}

export default PostCreate