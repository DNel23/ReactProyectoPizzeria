import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cart from './pages/Cart'
import Home from "./pages/Home"
import Login from './pages/Login'
import Pizza from './pages/Pizza'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { useContext } from 'react'
import { UserContext } from './context/userContext'

function App() {
  const { token } = useContext(UserContext)

  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={ !token ? <Register /> : <Navigate to='/' />} />
        <Route path='/login' element={ !token ? <Login /> : <Navigate to='/' />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/:id' element={<Pizza />} />
        <Route path='/profile' element={token ? <Profile /> : <Navigate to='/login' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
