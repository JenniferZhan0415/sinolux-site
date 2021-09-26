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
        <Link to="/exhibitions/" style={cover} className={styles.cover}>
            <span className={styles.scroll}>
                <p style={title} className={"serif " + styles.desktop}>Films of Li Yu / Buddha Mountain (2010) / Ever Since We Love (2015) / Sep. 26 - Sep.30 /&nbsp;</p>
                <p style={title} className={"serif " + styles.mobile}>Films of Li Yu / Buddha Mountain (2010) / Ever Since We Love (2015) / Sep. 26 - Sep.30 /&nbsp;</p>
            </span>
            <span className={styles.scroll}>
                <p style={title} className={"serif " + styles.desktop}>Films of Li Yu / Buddha Mountain (2010) / Ever Since We Love (2015) / Sep. 26 - Sep.30 /&nbsp;</p>
                <p style={title} className={"serif " + styles.mobile}>Films of Li Yu / Buddha Mountain (2010) / Ever Since We Love (2015) / Sep. 26 - Sep.30 /&nbsp;</p>
            </span>
        </Link>
    )
}

export default Cover
