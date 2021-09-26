import React from "react"
import {Link} from "gatsby"

import BWI from "../../widgets/buttons/buttonWithImg"
import {Subtitle} from "../../layouts/title"

const entryStyle = {
    height: "3vh"
}

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
        <div style={entryStyle}>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <Link to="/exhibitions/">EXHIBITIONS</Link>
                </Subtitle>
                <div style={info}>
                    <p style={title}>
                        线上展映<br/>
                        Films of Li Yu
                    </p>
                    <br/>
                    <p style={screenings} className="serif">
                        Buddha Mountain (2010)<br/>
                        Ever Since We Love (2015)<br/>
                        Sep. 24th - Sep. 30th
                    </p>
                </div>
            </BWI>
        </div>
    )
}

export default Exhibition
