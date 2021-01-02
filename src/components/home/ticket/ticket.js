import React from "react"

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

const Ticket = (props) => {
    return (
        <div>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <a href="https://vimeo.com/ondemand/mpesinolux">TICKETS</a>
                </Subtitle>
                <BackgroundImg style={polygon}/>
            </BWI>
        </div>
    )
}

export default Ticket
