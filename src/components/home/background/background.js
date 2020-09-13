import React from "react"

import BackgroundImg from "./brackgroundImage"
import BackgroundMobile from "./backgroundMobile"

import styles from "./background.module.scss"

const Background = () => {
    const polygon = {
        position: "fixed",
    }

    return (
        <>
            <div className={styles.background}>
                <BackgroundImg style={polygon} className={styles.polygon}/>
            </div>
            <div className={styles.backgroundMobile}>
                <BackgroundMobile/>
            </div>
        </>
    )
}

export default Background
