import React, { useState } from 'react'
import Header from './Header'



const Login = () => {
  const [isSignInform, setIsSigninform] = useState(true)

  const toggleSigninForm = () =>{
    setIsSigninform(!isSignInform)
  }

  return (
    <>
    <Header/>
    <div>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='bg' className='absolute'/>
    </div>
    <div>
      <form className='absolute bg-black p-10 w-4/12 left-0 right-0 m-auto top-32 text-white bg-opacity-80'>
        <h1 className='font-bold text-4xl '>{isSignInform ? "Sign In" : "Sign up"}</h1>
        {!isSignInform && <input type='text' name='fullname' className='p-3 mt-4 w-full bg-gray-800' placeholder='full name'/>}
        <input type='text' name='email' className='p-3 mt-4 w-full bg-gray-800' placeholder='signin'/>        <input type='password' name='password' className='p-3 mt-2 w-full bg-gray-800' placeholder='password'/>
        <button type='submit' className='mt-5 p-3 bg-red-700 w-full rounded-lg'>{isSignInform ? "Sign In" : "Sign up"}</button>
        <p className='mt-10 cursor-pointer' onClick={toggleSigninForm}>{isSignInform ? "New to netflix? Signup Now" : "Already registered? Signin now"}</p>

      </form>
    </div>
    </>
  )
}

export default Login
