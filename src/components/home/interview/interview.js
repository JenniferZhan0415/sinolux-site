import React from "react"
import {Link} from "gatsby"

import BWI from "../../widgets/buttons/buttonWithImg"
import {Subtitle} from "../../layouts/title"

const title1 = {
    position: "fixed",
    top: "18vh",
    left: "44vw",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: "5vh"
}

const title2 = {
    position: "fixed",
    top: "55vh",
    left: "65vw",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: "5vh"
}

const rect = {
    position: "fixed",
    top: "19vh",
    left: "48vw",
}

const Interview = (props) => {
    return (
        <div>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <Link to="/interview">NEWS & INTERVIEWS</Link>
                </Subtitle>
                <div>
                    <svg style={rect} width="40vh" height="40vh">
                        <rect x="3" y="3" width="37vh" height="37vh" stroke="black" strokeWidth="3" fill="LightSkyBlue" />
                    </svg> 
                    <p style={title1} className="serif">(新闻)</p>
                    <p style={title2} className="serif">(采访)</p>
                </div>
            </BWI>
        </div>
    )
}

export default Interview
