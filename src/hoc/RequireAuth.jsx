import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hook/useAuth'

const RequireAuth = ({ children }) => {

  const thisLocation = useLocation()
  const { user } = useAuth()

  if (!user) {
    return <Navigate to={'/registration'} state={{ from: thisLocation }} />
  }

  return children

}

export default RequireAuth