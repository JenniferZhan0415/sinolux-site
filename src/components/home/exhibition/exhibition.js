import React from "react"
import {Link} from "gatsby"

import BWI from "../../widgets/buttons/buttonWithImg"
import {Subtitle} from "../../layouts/title"

const info = {
    position: "fixed",
    top: "20vh",
    left: "40vw",
    textAlign: "center",
    fontSize: "4vh",
    lineHeight: "4vh"
}

const title = {
    fontSize: "3.2vh",
    lineHeight: "3.3vh",

    fontStyle: "italic",

    border: "0.3vh solid",
    borderRadius: "70%",
    padding: "1vh 1vw 1vh 1vw",
    background: "ghostwhite"
}

const screenings = {
    fontStyle: "italic",
    fontWeight: "400",
    borderRadius: "70%",
    padding: "4vh 3vw 4vh 3vw"
}

const Exhibition = (props) => {
    return (
        <div>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <Link to="/exhibitions/">EXHIBITIONS</Link>
                </Subtitle>
                <div style={info}>
                    <p style={title}>
                        线上展映<br/>
                        Virtual Screening
                    </p>
                    <br/>
                    <p style={screenings} className="serif">
                        第一次的离别 (A First Farewell, 2018)<br/>
                        February 25th (Fri) ~ March 5th (Fri)
                    </p>
                </div>
            </BWI>
        </div>
    )
}

export default Exhibition
