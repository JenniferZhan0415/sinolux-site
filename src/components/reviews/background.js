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
    top: "50%",
    left: "4%",
    transform: "translate(-50%,-60%) rotate(90deg) scaleX(1.7)",
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
