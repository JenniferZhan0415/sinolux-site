import React from "react"

import BWI from "../../widgets/buttons/buttonWithImg"
import {Subtitle} from "../../layouts/title"

const title = {
    position: "fixed",
    top: "45vh",
    left: "55vw",
    fontStyle: "italic",
    fontSize: "10vh",
    transform: "scale(1,2)",
    transition: "0.5s"
}

const Ticket = (props) => {
    return (
        <div>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <a href="https://vimeo.com/ondemand/mpesinolux">TICKETS</a>
                </Subtitle>
                <p style={title} className="serif">(购票)</p>
            </BWI>
        </div>
    )
}

export default Ticket
