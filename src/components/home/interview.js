import React from "react"
import {Link} from "gatsby"

import BackgroundImg from "./background/brackgroundImage"
import BWI from "../widgets/buttons/buttonWithImg"

import {PolygonStyles, UpperStyle, LowerStyle} from "./polygonStyles"

const interviewStyle = {
    position: "absolute",
    top: "60%",
    left: "32%",
    transform: "rotate(20deg)"
}

const reviewStyle = {
    position: "absolute",
    top: "70%",
    left: "29%",
    transform: "rotate(35deg)"
}

const Interview = () => {
    return (
        <div>
            <div style={interviewStyle}>
                <BWI>
                    <Link to="/interview">INTERVIEW 电影报道</Link>
                    <BackgroundImg style={PolygonStyles[4]}/>
                </BWI>
            </div>
            <div style={reviewStyle}>
                <BWI>
                    <Link to="/review">REVIEW 电影评论</Link>
                    <BackgroundImg style={PolygonStyles[5]}/>
                </BWI>
            </div>
        </div>
    )
}

export default Interview
