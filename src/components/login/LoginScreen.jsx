import React,{useState} from 'react'
import './loginScreen.css'
import SIgnInScreen from '../signIn/SIgnInScreen'

const LoginScreen = () => {

  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
       <div className='loginScreen__background'>
            <img className='loginScreen__logo' src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456'
             alt='bcakground '/>
             <button className='loginSreen__button' onClick={()=> setSignIn(true) }
             >Sign In</button>
             <div className='loginScreen__gradient'></div>
            <div className='loginScreen__body'>
              {signIn ? (<SIgnInScreen/>): (
                    <>
                    <h1 >Unlimited films, TV Programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at anytime </h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                    <div className='loginScreen__input'>
                       <form >
                          <input type='email' placeholder='Email Address' />
                           <button className='loginScreen__getStarted'
                            onClick={()=> setSignIn(true)}
                           >GET STARTED</button>
                       </form>
                    </div>
                  </>
              )}
              
            </div>
       </div>
    </div>
  )
}

export default LoginScreen
