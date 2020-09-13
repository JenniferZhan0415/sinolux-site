import React from "react"

import BackgroundImg from "./brackgroundImage"

import styles from "./background.module.scss"

const Background = () => {
    const polygon = {
        position: "fixed",
        width: "50%",
        top: "50%",
        right: "15%",
        transform: `translate(0,-60%) `,
    }

    return (
        <div className={styles.background}>
            <BackgroundImg style={polygon}/>
        </div>
    )
}

export default Background
