import React from "react"

import "./section.css"

const Section = (props) => {
    let style
    if (props.height)
        style = {
            height: props.height
        }
    else
        style = undefined

    return (
        <div className="section" style={style}>
            {props.children}
        </div>
    )
}

export default Section
