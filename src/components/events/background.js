import React, {Component} from "react"

import Logo2 from "../images/logo2"

const backgroundStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",

    zIndex: "0"
}

const polygonStyle = {
    position: "fixed",
    width: "20%",
    top: "45%",
    left: "10%",
    transform: "translate(-50%,-60%) rotate(90deg)",
}

class Background extends Component {

    render() {
        return (
            <div style={backgroundStyle}>
                <Logo2 style={polygonStyle}/>
            </div>
        )
    }
}

export default Background
