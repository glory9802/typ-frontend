import React from 'react'
import fly from '../../image/fly.jpg';
import styles from './Main.module.css';
import { useRouter } from 'next/router';

const Main = () => {
  const router = useRouter();

  const survay = () => {
    router.push('/survay')
  }

  return (
    <div className={styles['main-1']}>
      <h2 className={styles['main-2']}>
        <b>키워드로 추천하는 여행 경로</b>
      </h2>
      <h1 className={styles['main-3']}>
        <b>TYP</b>
      </h1>
      <div>
        <button onClick={survay} className={styles['main-5']}>시작하기</button>
      </div>
      <div>
        <img src={fly} alt='이미지테스트' />
      </div>
    </div>
  )
}

export default Main