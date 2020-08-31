import React from "react"

import BackgroundImg from "./brackgroundImage"
import styles from "./background.module.css"

const polygonStyle1 = {
    position: "fixed",
    width: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-30%,-60%)",
}

const Background = () => {
    return <div className={styles.background}>
        <BackgroundImg style={polygonStyle1}/>
    </div>
}

export default Background
