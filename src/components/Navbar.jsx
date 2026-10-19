import Home from '../pages/Home'
import Auth from '../pages/Auth'
import Checkout from '../pages/Checkout'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { useState } from 'react'

export default function Navbar() {
    const {user, logOut} = useContext(AuthContext)
   // const {mode, setMode} = useState('signup')
    const {sayHi, myname, wantoLogin, dologin, doSignup, } = useContext(AuthContext)

function checkLogin(){
   
    const themail =  localStorage.getItem("currentUserEmail")
    alert(themail)
    if(themail === null){
        alert('Please login')
    }
}

  return(
    <nav className='navbar'>
        <div className='navbar-container'>
                <Link to="/" className='navbar-brand'>ShopHub</Link>
                
                <div className='navbar-links'>
                    <Link to="/" className='navbar-link'>Home</Link>
                    <Link to="/checkout" className='navbar-link'>Cart</Link>
                </div>
                <div className='navbar-auth'>
                    {!user?(
                    <div className='navbar-auth-links'>
  <Link to="/auth" className='btn btn-secondary' onClick={()=>dologin()}>Login</Link>
  <Link to="/auth" className='btn btn-primary'   onClick={()=>doSignup()}>Signup</Link>
  <Link to="/auth" className='btn btn-secondary' onClick ={()=>sayHi()}>{myname}</Link>
                </div>
                    ):(<div className='navbar-user'><span className='navbar-greeting'>Hellow, {user.email}</span>
                    
                    <button className='btn btn-secondary' onClick={logOut}>Logout</button>
                    </div>)}
                </div>
        </div>
    
</nav>

    
    )     
  
}