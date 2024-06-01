import React from "react"

import Nov from "./months/nov"
import Dec from "./months/dec"
import * as styles from "../exhibitions.module.scss"

const Year2020 = (props) => {
    return (
        <div className={styles.year}>
            <div className={styles.yearContainer}>
                <div className={styles.sticky}><br/>2020</div>
            </div>
            <div className={styles.months}>
                <Dec setIntroId={props.setIntroId}/>
                <Nov setIntroId={props.setIntroId}/>
            </div>
        </div>
    )
}

export default Year2020
