import { Route, Routes } from 'react-router-dom'
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
import Cardpizza from './components/Cardpizza'

function App() {

  return (
    <>
        
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/p001' element={<Pizza />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        
      <Footer />
      
    </>
  )
}

export default App
