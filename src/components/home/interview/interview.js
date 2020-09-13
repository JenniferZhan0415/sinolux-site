import React from "react"
import {Link} from "gatsby"

import BackgroundImg from "../background/brackgroundImage"
import BWI from "../../widgets/buttons/buttonWithImg"

import styles from "./interview.module.scss"

const polygons = [
    {
        position: "absolute",
        top: "0",
        left: "20%",
        width: "60%",
        height: "100%",
        transform: "rotate(-40deg)"
    },
    {
        position: "absolute",
        top: "0",
        left: "70%",
        width: "50%",
        height: "100%",
        transform: "rotate(20deg)"
    },
]

const Interview = () => {
    return (
        <div>
            <div className={styles.review}>
                <BWI>
                    <Link to="/review">REVIEW 电影评论</Link>
                    <BackgroundImg style={polygons[0]}/>
                </BWI>
            </div>
            <div className={styles.interview}>
                <BWI>
                    <Link to="/interview">NEWS & INTERVIEW 电影报道</Link>
                    <BackgroundImg style={polygons[1]}/>
                </BWI>
            </div>
        </div>
    )
}

export default Interview
