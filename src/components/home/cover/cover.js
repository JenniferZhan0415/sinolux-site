import React from "react"
import {Link} from "gatsby"

// import {Subtitle} from "../../layouts/title"
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
        <Link to="/exhibitions/2020" style={cover}>
            <span className={styles.scroll}>
                <p style={title} className="serif">("我的电影观念" 系列展映 VOL.25) / Jan. 17th (Sun) 19:30 ~ 21:00 /&nbsp;</p>
            </span>
            <span className={styles.scroll}>
                <p style={title} className="serif">("我的电影观念" 系列展映 VOL.25) / Jan. 17th (Sun) 19:30 ~ 21:00 /&nbsp;</p>
            </span>
        </Link>
    )
}

export default Cover
