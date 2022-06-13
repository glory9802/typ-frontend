import React from 'react'
import styles from './Login.module.css'

const Login = () => {
  return (
<div className={styles[ "wrapper" ]}>
    <section className={styles[ "login-container" ]}>
	<div>
		<h1 className={styles[ "h1" ]}>로그인</h1>
	</div>
		    
    <div className={styles[ "email-container" ]}>	
        <input className={styles[ "email" ]} placeholder="email를 입력하세요" type="text"></input>
    </div>
    <div className={styles[ "password-container" ]}>	
        <input className={styles[ "password" ]} placeholder="비밀번호를 입력하세요" type="password"></input>
    </div>
    <div className={styles[ "button-container" ]}>
        <button className={styles[ "button" ]}>로그인</button>
    </div>
</section>
</div>
  )
}

export default Login