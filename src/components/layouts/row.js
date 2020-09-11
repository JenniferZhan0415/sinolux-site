import React from "react"

import "./row.css"

const Row = (props) => {
    let className = "row"
    className += props.className ? " " + props.className : ""

    return (
        <div className={className} id={props.id}>
            {props.children}
        </div>
    )
}

export default Row
