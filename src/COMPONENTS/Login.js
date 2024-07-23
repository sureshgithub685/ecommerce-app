import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth,provider } from '../firebase'
import { useNavigate } from 'react-router-dom'

function Login(props) {

  const navigate =useNavigate()

  function pleaseLogIn(){
    signInWithPopup (auth,provider)
    .then(function(){

      props.info (true)
      const userName = auth.currentUser.displayName
      const email =auth.currentUser.email
      console.log(userName,email)
      navigate('/home')
    })
    .catch(
      function(error){
       console.log(error)
      }
    )
  }
  return (
    <div style={{margin:30}}>
    <button className='btn btn-outline-primary' onClick={pleaseLogIn}>  Login to the Google</button>
    </div>
  )
}

export default Login