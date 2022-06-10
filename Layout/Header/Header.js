import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div>
        <nav>
            <div>
                <a href='/' className={style['header-main']}>
                    <h1>TYP</h1>
                    <h7 className={style['header-sub']}>trip your picks</h7>
                </a>
                <hr></hr>
            </div>
        </nav>
    </div>
  )
}

export default Header