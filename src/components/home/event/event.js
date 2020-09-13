import React from "react"
import {Link} from "gatsby"

import BackgroundImg from "..//background/brackgroundImage"
import BWI from "../../widgets/buttons/buttonWithImg"

import styles from "./event.module.scss"

const polygon = {
    position: "absolute",
    top: "0",
    left: "20%",
    width: "40%",
    height: "100%",
    transform: "rotate(-40deg)"
}

const Event = () => {
    return (
        <div>
            <div className={styles.events}>
                <BWI>
                    <Link to="/events/">COMMUNITY EVENTS 观影团活动</Link>
                    <BackgroundImg style={polygon}/>
                </BWI>
            </div>
        </div>
    )
}

export default Event
