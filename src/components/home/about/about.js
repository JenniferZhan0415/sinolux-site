import React from "react"
import {Link} from "gatsby"

import BackgroundImg from "../background/brackgroundImage"
import BWI from "../../widgets/buttons/buttonWithImg"
import {Subtitle} from "../../layouts/title"

const polygon = {
    position: "absolute",
    top: "0",
    left: "20%",
    width: "40%",
    height: "100%",
    transform: "rotate(-40deg)"
}

const About = (props) => {
    return (
        <div>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <Link to="/about-us">ABOUT US</Link>
                </Subtitle>
                <BackgroundImg style={polygon}/>
            </BWI>
        </div>
    )
}

export default About
