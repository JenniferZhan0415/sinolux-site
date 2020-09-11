import React from "react"
import {Link} from "gatsby"

import BackgroundImg from "./background/brackgroundImage"
import BWI from "../widgets/buttons/buttonWithImg"

import {UpperStyle, LowerStyle} from "./polygonStyles"

const polygons = [
    {
        position: "absolute",
        top: "0",
        left: "32%",
        width: "20%",
        height: "100%",
        transform: "rotate(-120deg)"
    },
    {
        position: "absolute",
        top: "0",
        left: "50%",
        width: "30%",
        height: "100%",
        transform: "rotate(-90deg)"
    },
    {
        position: "absolute",
        top: "0",
        left: "75%",
        width: "35%",
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

const Exhibition = () => {
    return (
        <div>
            <div style={UpperStyle}>
                <span>Exhibition &nbsp;</span>
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
            <div style={LowerStyle}>
                <BWI>
                    <Link to="/about-us">© SINO<span className="italic">LUX</span> FILM 华光电影<br/></Link>
                    <BackgroundImg style={polygons[3]}/>
                </BWI>
            </div>
        </div>
    )
}

export default Exhibition
