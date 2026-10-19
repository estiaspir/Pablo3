
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProductDetails from './pages/ProductDetails'

function App() {
  

  return (
    <AuthProvider>
    <div className='app'>
     <Navbar/>
       <p>This is the first p</p>  
            
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/auth" element={<Auth/> } />
        <Route path="/checkout" element={ <Checkout/>} />
        <Route path="/products/:id" element={ <ProductDetails/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>

   
    </div>
    </AuthProvider>
  )
}

export default App
