import React from 'react'
import styles from "../styles/DarkSwitch.module.css"
const DarkSwitch = () => {
  return (
    <>
        <div className={styles.darkLight}>
            <svg className={styles.svg} viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
        </div>
    </>
  )
}

export default DarkSwitch