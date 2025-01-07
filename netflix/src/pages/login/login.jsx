// import React, { useState } from 'react';
// import './login.css';
// import logo from '../../assets1/logo.png';
// import { login,signup } from '../../firebase.js';

// const Login = () => {
//   const [signState, setSignState] = useState("Sign In");
//   const [name,setName]=useState("");
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")

//   const user_auth=async(e)=>{
//     e.preventDefault()

//     if(signState==="sign In"){
//       await login(email,password)
//     }
//     else{
//       await signup(name,email,password)
//     }
//   }

//   return (
//     <div className='login'>
//       <img src={logo} className='login-logo' alt="Netflix Logo" />
//       <div className="login_form">
//         <h1>{signState}</h1>
//         <form>
         
//           {signState === "Sign Up" ? <input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Your Name' />:<></>}
//           <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Email' />
//           <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password' />
//           <button onClick={user_auth} type='submit'>{signState}</button>
//           <div className="for_help">
//             <div className="remember">
//               <input type="checkbox" id="remember" />
//               <label htmlFor='remember'>Remember Me</label>
//             </div>
//             <p>Need Help?</p>
//           </div>
//         </form>
//         <div className="form_swith">
//           {signState === "Sign In" ? (
//             <p>
//               New to Newflix? <span onClick={() => { setSignState("Sign Up") }}>Sign Up Now</span>
//             </p>
//           ) : (
//             <p>
//               Already have an account? <span onClick={() => { setSignState("Sign In") }}>Sign In Now</span>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import './login.css';
import logo from '../../assets1/logo.png';
import { login, signup } from '../../firebase.js';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();

    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
      alert("Your account has been created. You can sign in now!");
      setSignState("Sign In"); // Automatically switch to Sign In after successful Sign Up
    }
  };

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="Netflix Logo" />
      <div className="login_form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='Your Name'
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />
          <button onClick={user_auth} type='submit'>
            {signState}
          </button>
          <div className="for_help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor='remember'>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form_swith">
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
