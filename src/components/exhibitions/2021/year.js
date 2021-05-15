import React from "react"

// import Jan from "./months/jan"
import Feb from "./months/feb"
import Apr from "./months/apr"
import styles from "../exhibitions.module.scss"

const Year2021 = (props) => {
    return (
        <div className={styles.year}>
            <div className={styles.yearContainer}>
                <div className={styles.sticky}><br/>2021</div>
            </div>
            <div className={styles.months}>
                <Apr setIntroId={props.setIntroId}/>
                <Feb setIntroId={props.setIntroId}/>
                {/* <Jan setIntroId={props.setIntroId}/> */}
            </div>
        </div>
    )
}

export default Year2021
