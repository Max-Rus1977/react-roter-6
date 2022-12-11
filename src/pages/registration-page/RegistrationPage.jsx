import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'
import cl from './RegistrationPage.module.css'

const RegistrationPage = () => {

  const navigate = useNavigate()
  const thisLocation = useLocation()
  const { signIn } = useAuth()

  const fromPage = thisLocation.state?.from?.pathname

  const goPage = fromPage ? fromPage : '/posts'

  const handleSubmit = (event) => {
    event.preventDefault()
    const from = event.target
    const user = from.userName.value

    signIn(user, () => navigate(goPage, { replace: true }))

  }

  return (
    <div className={cl.box}>
      <h2>Страница регистрации</h2>
      <form onSubmit={handleSubmit}>
        <input name='userName' type="text" placeholder='Ваше Имя' />
        <div className={cl.boxBtn}>
          <button type='submit'>Log in</button>
        </div>
      </form>
      {
        fromPage &&
        <p>Вы попали сюда со страницы: <span>{fromPage}</span>, так как вы не зарегистрированы.
          Зарегистрируйтесь пожалуйста что бы создавать посты</p>
      }
    </div>
  )
}

export default RegistrationPage