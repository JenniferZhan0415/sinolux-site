import React from "react"

import "./section.scss"

const Section = (props) => {
    const styles = {}
    if (props.style)
        styles = props.style
    
    if (props.height)
        styles.height = props.height
    
    let className = "section";
    className += props.className ? " " + props.className : "";

    if (props.scrolled) {
        styles.transformOrigin = "center left"
        styles.transform = `rotate(${props.scrolled * 0.01 * 15 * -1}deg)`
    }

    return (
        <div className={className} style={styles}>
            {props.children}
        </div>
    )
}

export default Section
