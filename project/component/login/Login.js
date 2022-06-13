import React from 'react'

const Login = () => {
  return (
    <section class="login-input-section-wrap">
    <div class="login-input-wrap">	
        <input placeholder="Username" type="text"></input>
    </div>
    <div class="login-input-wrap password-wrap">	
        <input placeholder="Password" type="password"></input>
    </div>
    <div class="login-button-wrap">
        <button>Sign in</button>
    </div>
    <div class="login-stay-sign-in">
        <i class="far fa-check-circle"></i>
        <span>Stay Signed in</span>
    </div>
</section>
  )
}

export default Login