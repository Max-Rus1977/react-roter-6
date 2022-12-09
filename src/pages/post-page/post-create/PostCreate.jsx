import cl from './PostCreate.module.css'

const PostCreate = () => {
  return (
    <div className={cl.box}>
      <h2>Создание поста</h2>
      <input type="text" />
      <input type="text" />
      <button>ADD</button>
    </div>
  )
}

export default PostCreate