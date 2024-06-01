import React from "react"
import {Link} from "gatsby"
import Gallery from "./gallery"

import * as styles from "./cover.module.scss"

const cover = {
    position: "absolute",
    top: "10%",
    display: "none",
    whiteSpace: "nowrap",
}

const title = {
    fontStyle: "italic",
    fontSize: "10vh",
    transform: "scale(1,2)",
}

const Cover = () => {
    return (
        <>
            <Link to="https://player.tfai.org.tw/zh-TW/watchnow" style={cover} className={styles.cover}>
                <span className={styles.scroll}>
                    <p style={title} className={"serif " + styles.desktop}>Retrospect + Rebirth / Buy Tickets / 立即购票 / Missing Johnny (2017) / The Receptionist (2017) / Somewhere I Have Never Travelled (2009) / Nov. 19 – 28/&nbsp;</p>
                    <p style={title} className={"serif " + styles.mobile}>Retrospect + Rebirth / Buy Tickets / 立即购票 / Missing Johnny (2017) / The Receptionist (2017) / Somewhere I Have Never Travelled (2009) / Nov. 19 – 28/&nbsp;</p>
                </span>
                <span className={styles.scroll}>
                    <p style={title} className={"serif " + styles.desktop}>Retrospect + Rebirth / Buy Tickets / 立即购票 / Missing Johnny (2017) / The Receptionist (2017) / Somewhere I Have Never Travelled (2009) / Nov. 19 – 28/&nbsp;</p>
                    <p style={title} className={"serif " + styles.mobile}>Retrospect + Rebirth / Buy Tickets/ 立即购票 / Missing Johnny (2017) / The Receptionist (2017) / Somewhere I Have Never Travelled (2009) / Nov. 19 – 28/&nbsp;</p>
                </span>
            </Link>
            <Link to="https://player.tfai.org.tw/zh-TW/watchnow">
                <div className={styles.imgWrapper}>
                    {<Gallery/>}
                </div>
            </Link>
        </>
    )
}

export default Cover
