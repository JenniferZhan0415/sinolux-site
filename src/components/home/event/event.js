import React from "react"
import {Link} from "gatsby"

import BWI from "../../widgets/buttons/buttonWithImg"
import {Subtitle} from "../../layouts/title"

const title = {
    position: "fixed",
    top: "50vh",
    left: "65vw",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: "5vh"
}

const circle = {
    position: "fixed",
    top: "13vh",
    left: "45vw",
}

const Event = (props) => {
    return (
        <div>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <Link to="/events/">COMMUNITY EVENTS</Link>
                </Subtitle>
                <div>
                    <svg style={circle} width="50vh" height="50vh">
                        <circle cx="25vh" cy="25vh" r="22vh" stroke="black" strokeWidth="3" fill="salmon" />
                    </svg> 
                    <p style={title} className="serif">(影迷活动)</p>
                </div>
            </BWI>
        </div>
    )
}

export default Event
