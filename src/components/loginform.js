import React, { useState } from "react";
import "./loginform.css"
const LoginForm = () =>{
    
    const [uname,setUname]= useState('')
    const [pwd,setPwd]= useState('')
    function test(){
        console.log(uname)
        console.log(pwd)
       
    }
    const [popupStyle, showPopup] = useState("hide")

    const popup = ()=> {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="page">
        <div className="cover">
            <h1>LoginForm</h1>
            <input type="text" onChange={(e)=>{setUname(e.target.value)}} placeholder="username" />
            <input type="text" onChange={(e)=>{setPwd(e.target.value)}} placeholder="password" />
        
            <div className="login-btn" onClick={popup}>Login</div>
            
            <p className="text">Of login using</p>
            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Incorrect Credentials</p>
            </div>
        </div>
        </div>
    )
}

export default LoginForm