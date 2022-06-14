import React from 'react'
import Header from '../Layout/Header/Header';
import styles from './survay.module.css'
import { useRouter } from 'next/router'
<<<<<<< HEAD

=======
import PreIcon from '../public/static/svg/pre.svg'
import NextIcon from '../public/static/svg/next.svg'
>>>>>>> 0ff29ae88fa122f175d44c9229bae70041eeea68


const map = () => {

    
    const router = useRouter();

    const pre1 = () => {
        router.push('/survay')
    }
        
    const next1 = () => {
        router.push('/mainservice')
    }

<<<<<<< HEAD
=======
    

>>>>>>> 0ff29ae88fa122f175d44c9229bae70041eeea68
  return (
    <>
    
        <Header />
            <div className={styles['survay-detail']}>
                <h2>Seoul Tour Map</h2>
                <h7>목표로 하는 지역을 선택해주세요</h7>
            </div>
        <div className={styles['map-icon']}>
            <img src='https://www.seoul.go.kr/res_newseoul/images/seoul/seoul_map.gif' useMap='#map' alt='서울지도'/>
            <map name='map' id='map'>
<<<<<<< HEAD
                <area shape='rect' coords='227,158,261,179' href='/mainservice' title='종로구입니다.' alt='종로구입니다'/>
                <area shape='rect' coords='337,207,373,230' href='/mainservice' title='광진구입니다.' alt='광진구입니다'/>
            </map>
        </div>
        {/* <div className={styles['icon-container']}>
=======
                <area shape='rect' coords='227,158,261,179' href='/mainservice' target='blank' title='새창으로 열립니다.' alt='종로구입니다'/>
                <area shape='rect' coords='337,207,373,230' href='/mainservice' target='blank' title='새창으로 열립니다.' alt='광진구입니다'/>
            </map>
        </div>
        <div className={styles['icon-container']}>
>>>>>>> 0ff29ae88fa122f175d44c9229bae70041eeea68
        <div className={styles['icon-pre']}  onClick={pre1}>
          <PreIcon  />
        </div>
        <div className={styles['icon-next']} onClick={next1}>
          <NextIcon />
        </div>
<<<<<<< HEAD
      </div> */}
=======
      </div>
>>>>>>> 0ff29ae88fa122f175d44c9229bae70041eeea68
      
    </>
  )
}

export default map