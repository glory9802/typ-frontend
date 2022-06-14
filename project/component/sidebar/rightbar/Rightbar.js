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
                        <div className={styles['h7']}>이미지이름</div>
                        <li className={styles['li']}>
                            <div className={styles['content']}>
                                <div className={styles['checkbox-wrap']}>
                                    <input className={styles['input']} type="checkbox"/>
                                </div>
                            </div>
                        </li>
                        </div>

                        <div className={styles['divli-container']}>
                        <div className={styles['h7']}>이미지이름</div>
                        <li className={styles['li']}>
                            <div className={styles['content']}>
                                <div className={styles['checkbox-wrap']}>
                                    <input className={styles['input']} type="checkbox"/>
                                </div>
                            </div>
                        </li>
                        </div>

                        <div className={styles['divli-container']}>
                        <div className={styles['h7']}>이미지이름</div>
                        <li className={styles['li']}>
                            <div className={styles['content']}>
                                <div className={styles['checkbox-wrap']}>
                                    <input className={styles['input']} type="checkbox"/>
                                </div>
                            </div>
                        </li>
                        </div>

                        <div className={styles['divli-container']}>
                        <div className={styles['h7']}>이미지이름</div>
                        <li className={styles['li']}>
                            <div className={styles['content']}>
                                <div className={styles['checkbox-wrap']}>
                                    <input className={styles['input']} type="checkbox"/>
                                </div>
                            </div>
                        </li>
                        </div>

                        <div className={styles['divli-container']}>
                        <div className={styles['h7']}>이미지이름</div>
                        <li className={styles['li']}>
                            <div className={styles['content']}>
                                <div className={styles['checkbox-wrap']}>
                                    <input className={styles['input']} type="checkbox"/>
                                </div>
                            </div>
                        </li>
                        </div>

                        <div className={styles['divli-container']}>
                        <div className={styles['h7']}>이미지이름</div>
                        <li className={styles['li']}>
                            <div className={styles['content']}>
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