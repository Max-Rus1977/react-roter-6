import { useNavigate } from 'react-router-dom'
import cl from './PostCreate.module.css'

const PostCreate = () => {

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div className={cl.box}>
      <h2>Создание поста</h2>
      <input type="text" />
      <input type="text" />
      <div className={cl.boxBtn}>
        <button onClick={goBack}>
          <span className={cl.backArrow}>➣</span>
          Go back
        </button>
        <button>ADD</button>
      </div>
    </div>
  )
}

export default PostCreate