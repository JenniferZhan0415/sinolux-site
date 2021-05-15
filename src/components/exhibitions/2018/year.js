import React from "react"

import Dec from "./months/dec"
import styles from "../exhibitions.module.scss"

const Year2018 = (props) => {
    return (
        <div className={styles.year}>
            <div className={styles.yearContainer}>
                <div className={styles.sticky}><br/>2018</div>
            </div>
            <div className={styles.months}>
                <Dec setIntroId={props.setIntroId}/>
            </div>
        </div>
    )
}

export default Year2018
