import React from "react"
import {Link} from "gatsby"

import BackgroundImg from "./background/brackgroundImage"
import BWI from "../widgets/buttons/buttonWithImg"

const polygons = [
    {
        position: "absolute",
        top: "0",
        left: "20%",
        width: "40%",
        height: "100%",
        transform: "rotate(-40deg)"
    },
    {
        position: "absolute",
        top: "0",
        left: "70%",
        width: "100%",
        height: "100%",
        transform: "rotate(20deg)"
    }
]

const enStyle = {
    position: "absolute",
    top: "15%",
    left: "30%",

    transform: "rotate(-15deg)"
}

const zhStyle = {
    position: "absolute",
    top: "15%",
    left: "55%",

    transform: "rotate(-5deg)"
}

const Event = () => {
    return (
        <div>
            <div style={enStyle}>
                <BWI>
                    <Link to="/events/">YEAR ROUND COMMUNITY EVENTS</Link>
                    <BackgroundImg style={polygons[0]}/>
                </BWI>
            </div>
            <div style={zhStyle}>
                <BWI>
                    <Link to="/events/">全年观影团活动</Link>
                    <BackgroundImg style={polygons[1]}/>
                </BWI>
            </div>
        </div>
    )
}

export default Event
