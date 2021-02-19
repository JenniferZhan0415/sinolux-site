import React from "react"
import {Link} from "gatsby"

import styles from "./cover.module.scss"

const cover = {
    position: "absolute",
    top: "40%",
    display: "flex",
    whiteSpace: "nowrap",
}

const title = {
    fontStyle: "italic",
    fontSize: "10vh",
    transform: "scale(1,2)",
}

const Cover = () => {
    return (
        <Link to="/exhibitions/" style={cover}>
            <span className={styles.scroll}>
                <p style={title} className={"serif " + styles.desktop}>Virtual Screening / A First Farewell / Feb. 26th (Fri) ~ Mar. 5th (Fri) /&nbsp;</p>
                <p style={title} className={"serif " + styles.mobile}>Virtual Screening / A First Farewell / Feb. 26th (Fri) ~ Mar. 5th (Fri) /&nbsp;</p>
            </span>
            <span className={styles.scroll}>
                <p style={title} className={"serif " + styles.desktop}>Virtual Screening / A First Farewell / Feb. 26th (Fri) ~ Mar. 5th (Fri) /&nbsp;</p>
                <p style={title} className={"serif " + styles.mobile}>Virtual Screening / A First Farewell / Feb. 26th (Fri) ~ Mar. 5th (Fri) /&nbsp;</p>
            </span>
        </Link>
    )
}

export default Cover
