import React from 'react'
import './login.css'
import logo from '../../assets1/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="Netflix Logo" />
      <div className="login_form">
        <h1>Sign Up</h1>
        <form>
          <input type='text' placeholder='Your name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>Sign Up</button>
          <div className="for_help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor='remember'>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
