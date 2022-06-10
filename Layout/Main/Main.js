import React from 'react'
import fly from '../../image/fly.jpg';
import style from './Main.module.css';


const Main = () => {
  return (
    <div className={style['main-1']}>
      <h2 className={style['main-2']}>
        <b>키워드로 추천하는 여행 경로</b>
      </h2>
      <h1 className={style['main-3']}>
        <b>TYP</b>
      </h1>
      <div>
        <a href='/' className={style['main-5']}>시작하기</a>
      </div>
      <div>
        <img src={fly} alt='이미지테스트' />
      </div>
    </div>
  )
}

export default Main