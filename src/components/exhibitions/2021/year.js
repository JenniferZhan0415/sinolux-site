import React from "react"

import Jan from "./months/jan"
import Feb from "./months/feb"
import styles from "../exhibitions.module.scss"

const Year2021 = (props) => {
    return (
        <div className={styles.year}>
            <div className={styles.yearContainer}>
                <div className={styles.sticky}>2021</div>
            </div>
            <div className={styles.months}>
                <Feb setIntroId={props.setIntroId}/>
                <Jan setIntroId={props.setIntroId}/>
            </div>
        </div>
    )
}

export default Year2021
