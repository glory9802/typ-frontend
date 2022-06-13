import React from 'react'
import styles from './Signup.module.css'

const Signup = () => {
	return (
		
		<section className={styles[ "signup-wrap" ]} >
			<div>
				<h1 className={styles[ "h1" ]}>회원가입</h1>
			</div>
		
			<div >
				<h3 className={styles[ "h3" ]}>이메일</h3>
				<span className={styles["signup-span"]}>
					<input className={styles["signup-input"]} id="signup-id" type="text" placeholder="이메일을 입력해주세요"></input>
				</span>

				<h3 className={styles[ "h3" ]}>비밀번호</h3>
				<span className={styles["signup-span"]}>
					<input className={styles["signup-input"]} id="signup-pw" type="text" placeholder="비밀번호를 입력해주세요"></input>
				</span>
			</div>

			<div>
				<h3 className={styles[ "h3" ]}>이름</h3>
				<span className={styles["signup-span"]}>
					<input className={styles["signup-input"]} id="signup-name" type="text"></input>
				</span>

				<h3 className={styles[ "h3" ]}>생년월일</h3>
				<span>
					<span className={styles["signup-input-birth"]}>
						<input id="signup-birth-yy" type="text" placeholder="년(4자)"></input>
					</span>
					<span className={styles["signup-input-birth" ]} >
						<select id="signup-birth-mm" className={styles["selectbox" ]} name="month" >
							<option value="month">월</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select>
					</span>
					<span className={styles["signup-input-birth"]} >
						<input id="signup-birth-dd" type="text" placeholder="일"></input>
					</span>
				</span>

				<h3 className={styles[ "h3" ]}>성별</h3>
				<span className={styles["signup-span"]}>
					<select id="signup-gender" className={styles["selectbox" ]} name="gender" >
						<option value="gender">성별</option>
						<option value="man">남자</option>
						<option value="woman">여자</option>
						<option value="no">선택 안함</option>
					</select>
				</span>
			</div>

			<div >
				<h3 className={styles[ "h3" ]}>휴대전화</h3>
				<div >
					<span className={styles["signup-span" ]} >
						<input className={styles["signup-input"]} id="signup-phone" type="text" placeholder="전화번호 입력"></input>
					</span>
				</div>
			</div>

			<div>
				<div className={styles["signup-btn-wrap"]}>
					<button className={styles["signup-btn"]} id="signup-btn">가입하기</button>
				</div>
			</div>
		</section>

	)
}

export default Signup