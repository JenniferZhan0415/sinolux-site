import React from "react"
import {Link} from "gatsby"

import BackgroundImg from "./background/brackgroundImage"
import Section from "../layouts/section"
import BWI from "../widgets/buttons/buttonWithImg"

import {PolygonStyles, UpperStyle, LowerStyle} from "./polygonStyles"

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
                    <BackgroundImg style={PolygonStyles[4]}/>
                </BWI>
            </div>
            <div style={zhStyle}>
                <BWI>
                    <Link to="/events/">全年观影团活动</Link>
                    <BackgroundImg style={PolygonStyles[3]}/>
                </BWI>
            </div>
        </div>
    )
}

export default Event
