import React from "react"

import Logo2 from "../../images/logo2"
import styles from "./rotate.module.scss"

const Rotate = (props) => {
    const polygon = {
        position: "fixed",
        top: "55%",
        left: "50%",
        transform: `translate(-50%,-60%) rotate(${ (-1 + props.scrolled * 2) * 180 }deg)`,
    }

    return (
        <div className={styles.wrapper}>
            <Logo2 style={polygon} className={styles.polygon}/>
        </div>
    )
}

export default Rotate
