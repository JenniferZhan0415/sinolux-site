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

const Event = () => {
    const events = {
        position: "absolute",
        top: "15%",
        left: "30%",
    
        transform: `rotate(-20deg)`
    }

    return (
        <div>
            <div style={events}>
                <BWI>
                    <Link to="/events/">COMMUNITY EVENTS 观影团活动</Link>
                    <BackgroundImg style={polygons[0]}/>
                </BWI>
            </div>
        </div>
    )
}

export default Event
