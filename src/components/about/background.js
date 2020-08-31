import React from "react"

import Logo2 from "../images/logo2"
import styles from "./background.module.css"

const polygonStyle = {
    position: "fixed",
    width: "20%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-60%)",
}

const Background = () => {
    return <div className={styles.background}>
        <Logo2 style={polygonStyle}/>
    </div>
}

export default Background
