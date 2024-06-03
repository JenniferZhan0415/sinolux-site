import React from "react"

import BWI from "../../widgets/buttons/buttonWithImg"
import {Subtitle} from "../../layouts/title"

const entryStyle = {
    height: "3vh"
}

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
        <div style={entryStyle}>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <a target="_blank" rel="noreferrer" href="https://www.tiff.net">TICKETS</a>
                </Subtitle>
                <p style={title} className="serif">(购票)</p>
            </BWI>
        </div>
    )
}

export default Ticket
