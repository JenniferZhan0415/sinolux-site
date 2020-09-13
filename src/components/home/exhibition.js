import React from "react"
import {Link} from "gatsby"

import BackgroundImg from "./background/brackgroundImage"
import BWI from "../widgets/buttons/buttonWithImg"

const polygons = [
    {
        position: "absolute",
        top: "0",
        left: "50%",
        width: "15%",
        height: "100%",
        transform: "rotate(-120deg)"
    },
    {
        position: "absolute",
        top: "0",
        left: "66%",
        width: "15%",
        height: "100%",
        transform: "rotate(-90deg)"
    },
    {
        position: "absolute",
        top: "20%",
        left: "85%",
        width: "25%",
        height: "100%",
        transform: "rotate(20deg)"
    },
    {
        position: "absolute",
        top: "0",
        left: "30%",
        width: "50%",
        height: "100%",
        transform: "rotate(30deg)"
    }
]

const exhibition = {
    position: "absolute",
    display: "inline-block",
    bottom: "65%",
    left: "32%",
    zIndex: "3",
    transform: "rotate(-6deg)"
}

const Exhibition = () => {
    return (
        <div>
            <div style={exhibition}>
                <span>EXHIBITION 影展&nbsp;</span>
                <BWI>
                    <Link to="/exhibitions/2017">2017</Link>&nbsp;
                    <BackgroundImg style={polygons[0]}/>
                </BWI>
                <BWI>
                    <Link to="/exhibitions/2018">2018</Link>&nbsp;
                    <BackgroundImg style={polygons[1]}/>
                </BWI>
                <BWI>
                    <Link to="/exhibitions/2019">2019</Link>&nbsp;
                    <BackgroundImg style={polygons[2]}/>
                </BWI>
            </div>
        </div>
    )
}

export default Exhibition
