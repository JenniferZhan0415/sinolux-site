import React, {Component} from "react"

import Logo2 from "../images/logo2"
import * as styles from "./background.module.scss"

const polygonStyle = {
    position: "fixed",
    width: "100%",
    top: "55%",
    left: "50%",
    transform: "translate(-50%,-60%)",
}

class Background extends Component {

    render() {
        return (
            <div className={styles.background}>
                <Logo2 style={polygonStyle}/>
            </div>
        )
    }
}

export default Background
