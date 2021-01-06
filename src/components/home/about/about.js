import React from "react"
import {Link} from "gatsby"

import BWI from "../../widgets/buttons/buttonWithImg"
import {Subtitle} from "../../layouts/title"

const title = {
    position: "fixed",
    top: "45vh",
    left: "55vw",
    fontStyle: "italic",
    fontSize: "10vh",
    transform: "scale(1,2)"
}


const About = (props) => {
    return (
        <div>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <Link to="/about-us">ABOUT US</Link>
                </Subtitle>
                <p style={title} className="serif">(关于华光)</p>
            </BWI>
        </div>
    )
}

export default About
