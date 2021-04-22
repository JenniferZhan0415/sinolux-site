import React from "react"
import {Link} from "gatsby"

import BWI from "../../widgets/buttons/buttonWithImg"
import {Subtitle} from "../../layouts/title"

const entryStyle = {
    height: "3vh"
}

const title = {
    position: "fixed",
    top: "49vh",
    left: "65vw",
    fontStyle: "italic",
    fontSize: "5vh",
    lineHeight: "4.7vh"
}

const tri = {
    position: "fixed",
    top: "15vh",
    left: "48vw",
}

const Review = (props) => {
    return (
        <div style={entryStyle}>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <Link to="/review">REVIEWS</Link>
                </Subtitle>
                <div>
                    <svg style={tri} width="40vh" height="40vh" viewBox="0 0 100 100">
                        <polygon points="50 1, 1 99, 99 99" stroke="black" strokeWidth="0.5" fill="Gold" />
                    </svg> 
                    <p style={title} className="serif">
                        (影评)<br/>
                        (观后感)
                    </p>
                </div>
            </BWI>
        </div>
    )
}

export default Review


