import React from 'react'
import styles from './Info.module.css'

const info = () => {
  return (
    <>

    <div className={styles['info-container']}>
        <label className={styles['info-label']}><input type="checkbox" name="survay1" value="1" /><span>혼자서</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay1" value="2" /><span>연인이랑</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay1" value="3" /><span>가족이랑</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay2" value="1" /><span>2만원이하</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay2" value="2" /><span>5만원이하</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay2" value="3" /><span>무조건좋은곳</span></label>
    </div>

    </>
  )
}

export default info