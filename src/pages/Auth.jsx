import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import AuthProvider from '../context/AuthContext'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Auth() {
   const [mymode,setMymode] = useState('Signup')
    const [error, setError] = useState(null);
    const { register,handleSubmit,formState: { errors } } = useForm()
   const {signUp, user, logOut, login, dologin, doSignup, mode } = useAuth()
   const navigate = useNavigate()
    
   function onSubmit(data) {
    setError(null)
    let result;
    if(mode === "Signup"){
         result = signUp(data.email, data.password)
    }
    else{
       result = login(data.email, data.password)
      
    }

    if(result.success){
        
        alert('Yey')
        navigate('/')
    }else{
        setError(result.error)
    }

     console.log(result)
    }

    function userWantsLogin(){
        if(mymode === 'Sinup'){
        setMode('Login')
    }
    else{
        setMymode('Signup')
    }
    }

    return (
        <div className='page'>
            <div className='container'>
                <div className='auth-container'>
                    {user && <p> User loged in: {user.email}</p>}
                    <button onClick={()=>logOut()}>Logout</button>
                    <h1 className='page-title' id="myh1">{mode=== 'Signup'?  'Sign up':'Login' }</h1>
                    <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
                        {error && <div className='error-message'>{error}</div>}
                        <div className='form-group'>
                            <label className='form-label' htmlFor='email'>Email</label>
                            <input className='form-input' type='email' id='email'
                                {...register('email',{
                                    required: 'Email is required'
                                })} />
                            {errors.email && <span className='form-error'>{errors.email.message}</span>}
                        </div>

                          <div className='form-group'>
                            <label className='form-label' htmlFor='password'>Password</label>
                            <input className='form-input' type='password' id="password"
                                {...register('password',{ required: 'Password is required', maxLength:{
                                value:12, message: 'Password is required'
                                },minLength: { value: 6,message: 'Passwors must be at least 6 Charecters' }
                                },)} />
                              {errors.password && <span className='form-error'>{errors.password.message}</span>}
                        </div>
                        <button className='btn btn-primary' type='submit'>{mode=== 'Signup'   ?  'Sign up':'Login'}</button>
                    </form>
                    <div className='auth-switch'>
                        {mode === 'Signup' ?
                            <p>Already have an account? <span className='auth-link'
                            onClick={ ()=>dologin()}>Login</span></p> : 
                            <p>Don't have an account? <span className='auth-link'
                            onClick={()=>doSignup()}>Sign up</span></p>
                         }
                       
                    </div>
                      <p>Auth page</p>  
                </div>
            </div>
        
            </div>
    )
}