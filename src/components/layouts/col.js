import React from "react"

import "./col.css"

const Col = (props) => {
    return (
        <div className={"col " + props.className}>
            {props.children}
        </div>
    )
}

export default Col
