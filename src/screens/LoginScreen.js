import React, { useState } from 'react'
import './login.css'
import SignInScreen from './SignInScreen'
function LoginsScreen() {
  const [signIn, setSignIn]= useState(false)

  return (
    <div className="loginScreen">
      <div className="loginScreen__Background">
        <img 
        className="loginScreen__Logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
        alt="" />
        <button  onClick={()=> setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient"/>
      </div>
      <div className="loginScreen__body">
      {signIn ? (<SignInScreen/>):(
        <>
          <h1>
            Unlimited films programs and more...
          </h1>
          <h2>
          Watch anywhere. Cancel anytime
          </h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        
          <div className="loginScreen__input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button onClick={()=>setSignIn(true)} className="loginScreen__getStarted">GET STARTED</button>
            </form>
          </div>
        </>
      )}
       
      </div>
    </div>
  )
}

export default LoginsScreen