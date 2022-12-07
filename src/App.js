import { Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PostsPage from './pages/PostsPage'
import NotFoundPage from './pages/NotFoundPage'

import './style.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='posts' element={<PostsPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
