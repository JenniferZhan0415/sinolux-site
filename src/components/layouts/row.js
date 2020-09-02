import React from "react"

import "./row.css"

const Row = (props) => {
    let styles = "row";
    const inputStyles = Array.isArray(props.className) ? props.className.join(" ") : props.className;
    if (inputStyles) styles += " " + inputStyles;

    return (
        <div className={styles}>
            {props.children}
        </div>
    )
}

export default Row
