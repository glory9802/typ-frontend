import React from 'react'
import styles from './Rightbar.module.css'

const Rightbar = () => {


    return (
        <div className={styles['wrapper']}>
            <div className={styles['search-wrap']}>
                <input className={styles['search']} type="text" placeholder="검색어 입력"/>
            </div>
            <div className={styles['entire-wrap']}>
                <div className={styles['btn-wrap']}>
                    <button className={styles['btn']}>숙소</button>
                    <button className={styles['btn']}>먹거리</button>
                    <button className={styles['btn']}>놀거리</button>
                </div>
                <div className={styles['list-container']}>
                    <ul className={styles['ul']}>
                        <div className={styles['divli-container']}>
                        <div className={styles['h7']}>CGV 건대입구</div>
                        <li className={styles['li']}>
                            <div className={styles['content']}>
                            <img className={styles['image']} src={'/image/cgv.jpg'} alt='이미지 안나와여' />
                                <div className={styles['checkbox-wrap']}>
                                    <input className={styles['input']} type="checkbox"/>
                                </div>
                            </div>
                        </li>
                        </div>

                        <div className={styles['divli-container']}>
                        <div className={styles['h7']}>예스24라이브홀 </div>
                        <li className={styles['li']}>
                            <div className={styles['content']}>
                            <img className={styles['image']} src={'/image/yes24.jpg'} alt='이미지 안나와여' />
                                <div className={styles['checkbox-wrap']}>
                                    <input className={styles['input']} type="checkbox"/>
                                </div>
                            </div>
                        </li>
                        </div>

                        <div className={styles['divli-container']}>
                        <div className={styles['h7']}>어린이대공원</div>
                        <li className={styles['li']}>
                            <div className={styles['content']}>
                            <img className={styles['image']} src={'/image/children.jpg'} alt='이미지 안나와여' />
                                <div className={styles['checkbox-wrap']}>
                                    <input className={styles['input']} type="checkbox"/>
                                </div>
                            </div>
                        </li>
                        </div>

                        <div className={styles['divli-container']}>
                        <div className={styles['h7']}>워커힐 숲길</div>
                        <li className={styles['li']}>
                            <div className={styles['content']}>
                            <img className={styles['image']} src={'/image/walkerhill.jpg'} alt='이미지 안나와여' />
                                <div className={styles['checkbox-wrap']}>
                                    <input className={styles['input']} type="checkbox"/>
                                </div>
                            </div>
                        </li>
                        </div>

                        <div className={styles['divli-container']}>
                        <div className={styles['h7']}>커먼 그라운드</div>
                        <li className={styles['li']}>
                            <div className={styles['content']}>
                                <div className={styles['checkbox-wrap']}>
                                <img className={styles['image']} src={'/image/ground.jpg'} alt='이미지 안나와여' />
                                    <input className={styles['input']} type="checkbox"/>
                                </div>
                            </div>
                        </li>
                        </div>

                        <div className={styles['divli-container']}>
                        <div className={styles['h7']}>고릴라 캠핑</div>
                        <li className={styles['li']}>
                            <div className={styles['content']}>
                            <img className={styles['image']} src={'/image/camp.jpg'} alt='이미지 안나와여' />
                                <div className={styles['checkbox-wrap']}>
                                    <input className={styles['input']} type="checkbox"/>
                                </div>
                            </div>
                        </li>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Rightbar