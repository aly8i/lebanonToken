import React from 'react'
import styles from "../styles/Board.module.css"
import Background from './Background'
import DarkSwitch from './DarkSwitch'
import FeaturesBanner from './FeaturesBanner'
import Header from './Header'
import Installed from './Installed'
import LeftBar from './LeftBar'
import MainHeader from './MainHeader'
import AppsSection from './AppsSection'
const AppBoard = () => {
  return (
    <>
        <Background/>
        <DarkSwitch/>
        <div className={styles.app}>
            <Header/>
                <div className={styles.wrapper}>
                    <LeftBar/>
                    <div className={styles.mainContainer}>
                        <MainHeader/>
                    <div className={styles.contentWrapper}>
                        <FeaturesBanner/>
                        <div className={styles.contentSection}>
                            <Installed/>
                        </div>
                        <div className={styles.contentSection}>
                            <AppsSection/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.overlayApp}></div>
        </div>
    </>
  )
}

export default AppBoard