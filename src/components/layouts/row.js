import React from "react"

import "./row.css"

const Row = (props) => {
    return (
        <div className={"row " + props.className}>
            {props.children}
        </div>
    )
}

export default Row
