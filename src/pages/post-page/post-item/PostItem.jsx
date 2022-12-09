import { Link } from 'react-router-dom'
import cl from './PostItem.module.css'

const PostItem = ({ posts }) => {
  return (
    <div>
      {
        posts.map(({ id, title, body }) =>
          <div key={id} className={cl.wrapPost}>
            <h3 className='text-page'>{title}</h3>
            <p className='text-page'>{body}</p>
            <Link to={`/posts/${id}`} >Перейти ...</Link>
          </div>
        )}
    </div>
  )
}

export default PostItem