import React from "react"

import "./section.css"

const Section = (props) => {
    let style
    if (props.height)
        style = {
            height: props.height
        }
    else
        style = props.style
    
    let className = "section ";
    className += Array.isArray(props.className) ? props.className.join(" ") : props.className;

    return (
        <div className={className} style={style}>
            {props.children}
        </div>
    )
}

export default Section
