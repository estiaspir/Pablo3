import { createContext, useContext } from "react";
import { useState } from "react";
export  const AuthContext = createContext(null);

export default function AuthProvider({children}){
const [user, setUser] = useState(localStorage.getItem("currentUserEmail")? {email: localStorage.getItem("currentUserEmail")}:null)
const [mode,setMode] = useState('Signup')

function signUp(email, password){
   
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if(users.find((use)=> use.email === email)){
        alert('User exists!')
        return{ success: false, error: 'Email already exists'}
    }
    const newUser = {email, password}
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);
    setUser({email})
    return {success: true}
}

function logOut(){
    localStorage.removeItem("currentUserEmail")
    setUser(null)
}

function login(email, password){
   
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const user = users.find((use)=> use.email === email && use.password === password)
    if(!user){
        return {success: false, error: "Invalid email or password"}
    }
localStorage.setItem("currentUserEmail", email)
setUser({email})
return{success: true}
}
const [myname, setMyname] = useState('Pablo')
function sayHi(){
    alert('Hi there!')
    if(myname === 'Pablo'){
        setMyname('Leo')
    }
    else{
        setMyname('Pablo')

    }
}

const [wantoLogin, setWantologin] = useState(false)
function dologin(){
    setWantologin(true)
    setMode('Login')
    alert('This is the dologin function')
}

function doSignup(){
    setMode('Signup')
}
    return (
        <AuthContext.Provider value={{signUp, user, logOut, login, sayHi, myname, wantoLogin, dologin, mode, doSignup}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
const context = useContext(AuthContext)
return context    
}