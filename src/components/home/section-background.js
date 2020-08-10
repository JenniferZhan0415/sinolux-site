import React from "react"

import "./section-background.css"

const SectionBackground = (props) => {
    return (
        <div className={"section-bg " + props.style}>
            <div className="background-wrapper">
                {props.children}
            </div>
        </div>
    )
}

export default SectionBackground
