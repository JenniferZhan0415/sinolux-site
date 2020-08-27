import React from "react"

import "./row.css"

const Row = (props) => {
    let styles = "row";
    const inputStyles = Array.isArray(props.style) ? props.style.join(" ") : props.style;
    if (inputStyles) styles += " " + inputStyles;

    return (
        <div className={styles}>
            {props.children}
        </div>
    )
}

export default Row
