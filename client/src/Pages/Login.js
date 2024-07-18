import React, { useState } from 'react'
import "./css/Login.css"


const Login = () => {

    const [isLogin, setIsLogin] = useState(false)

    return (
        <div className='login'>
            <div className='login-container'>
                <h1>{isLogin ? "Sign Up" : "Sign In"}</h1>
                <div className='login-fields'>
                    {
                        isLogin && (
                            <input type='text' placeholder='Enter Your Name' />
                        )
                    }
                    <input type='email' placeholder='Enter Your Email' />
                    <input type='password' placeholder='Enter Your Password' />
                </div>
                <button>{isLogin ? "Sign Up" : "Sign In"}</button>
                <p className='login-login'>
                    {isLogin ? "  Already have an account?" : "Please, Create Your Account!"}
                    <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? " Sign In here" : " Sign Up here"}</span>
                </p>
                {
                    isLogin && (
                        <div className='login-agree'>
                            <input type='checkbox' name='checkbox' id='checkbox' />
                            <p>By continue, I agree to the terms of use & privacy policy</p>
                        </div>
                    )
                }
            </div>
            
        </div>
    )
}

export default Login