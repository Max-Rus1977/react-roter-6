import { Routes, Route, Navigate } from 'react-router-dom'

import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PostsList from './pages/post-page/PostList'
import PostSingle from './pages/post-page/single-post/PostSingle'
import PostEdit from './pages/post-page/edit-post/PostEdit'
import PostCreate from './pages/post-page/post-create/PostCreate'
import RegistrationPage from './pages/registration-page/RegistrationPage'
import NotFoundPage from './pages/NotFoundPage'

import './style.css'
import RequireAuth from './hoc/RequireAuth'
import AuthProvider from './hoc/AuthProvider'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='posts' element={<PostsList />} />
            <Route path='posts/:id' element={<PostSingle />} />
            <Route path='posts/:id/edit' element={<PostEdit />} />
            <Route path='posts/create' element={
              <RequireAuth>
                <PostCreate />
              </RequireAuth>
            } />
            <Route path='about' element={<AboutPage />} />
            <Route path='about-us' element={<Navigate to='/about' replace />} />
            <Route path='registration' element={<RegistrationPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
