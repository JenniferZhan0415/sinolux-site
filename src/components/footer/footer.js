import React from "react"
import {Link} from "gatsby"

import BWI from "../widgets/buttons/buttonWithImg"
import BackgroundImg from "../home/background/brackgroundImage"

import "./footer.css"

const polygonStyles = [
    {
        position: "fixed",
        bottom: "20%",
        left: "5%",
        width: "10%",
        height: "auto",
        transform: "rotate(25deg)"
    },
    {
        position: "fixed",
        bottom: "5%",
        left: "5%",
        width: "10%",
        height: "auto",
        transform: "rotate(15deg)"
    },
]

const Footer = () => {
    return (
        <div className="nav-bar">
            <div>
                <BWI>
                    <a href="https://tiff.net/">TICKETS<br/>票</a>
                    <BackgroundImg style={polygonStyles[0]}/>
                </BWI>
                <br/>
                <br/>
                <BWI>
                    <Link to="about-us">ABOUT US<br/>关于我们</Link>
                    <BackgroundImg style={polygonStyles[1]}/>
                </BWI>
            </div>
		</div>
    )
}

export default Footer
