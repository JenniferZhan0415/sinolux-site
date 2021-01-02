import React, { Component } from "react"
import {Link} from "gatsby"

import BackgroundImg from "../background/brackgroundImage"
import BWI from "../../widgets/buttons/buttonWithImg"
import {Subtitle} from "../../layouts/title"

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

const Exhibition = (props) => {
    return (
        <div>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <Link to="/exhibitions/2020">EXHIBITIONS</Link>
                </Subtitle>
                <BackgroundImg style={polygons[0]}/>
            </BWI>
        </div>
    )
}

export default Exhibition
