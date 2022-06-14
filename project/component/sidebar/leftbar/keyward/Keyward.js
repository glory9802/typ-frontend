import React from 'react'
import styles from './Keyward.module.css'

const Keyward = () => {
  return (
    <>
    <div className={styles['keyward-container']}>
        <label className={styles['keyward-label']}><input type="checkbox" name="survay1" value="4" /><span>공연/행사</span></label>
        <label className={styles['keyward-label']}><input type="checkbox" name="survay1" value="3" /><span>문화시설</span></label>
        <label className={styles['keyward-label']}><input type="checkbox" name="survay1" value="2" /><span>레포츠</span></label>
        <label className={styles['keyward-label']}><input type="checkbox" name="survay1" value="4" /><span>쇼핑</span></label>
        <label className={styles['keyward-label']}><input type="checkbox" name="survay1" value="3" /><span>식당</span></label>
        <label className={styles['keyward-label']}><input type="checkbox" name="survay1" value="2" /><span>카페</span></label>
    </div>
    </>
  )
}

export default Keyward