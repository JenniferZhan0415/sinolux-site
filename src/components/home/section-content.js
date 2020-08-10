import React from "react"

import "./section-content.css"

const sectionContent = (props) => {
    return (
        <div className={props.style + ' content-wrapper'}>
            {props.children}
        </div>
    )
}

export default sectionContent
