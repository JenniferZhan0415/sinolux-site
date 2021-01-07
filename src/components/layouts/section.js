import React from "react"

import "./section.scss"

const Section = (props) => {
    let styles = {}
    if (props.style)
        styles = props.style
    
    if (props.height)
        styles.height = props.height

    if (props.scrolled) {
        styles.transformOrigin = "center left"
        styles.transform = `rotate(${props.scrolled * 0.01 * 15 * -1}deg)`
    }

    return (
        <div className={"section " + props.className} style={styles}>
            {props.children}
        </div>
    )
}

export default Section
