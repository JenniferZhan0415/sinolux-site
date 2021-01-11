import React from "react"

import Oct from "./months/oct"
import styles from "../exhibitions.module.scss"

const Year2017 = (props) => {
    return (
        <div className={styles.year}>
            <div className={styles.yearContainer}>
                <div className={styles.sticky}>2017</div>
            </div>
            <div className={styles.months}>
                <Oct setIntroId={props.setIntroId}/>
            </div>
        </div>
    )
}

export default Year2017
