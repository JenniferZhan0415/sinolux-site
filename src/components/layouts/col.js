import React from "react"

import "./col.css"

const Col = (props) => {
    let styles = "col";
    const inputStyles = Array.isArray(props.style) ? props.style.join(" ") : props.style;
    if (inputStyles) styles += " " + inputStyles;

    return (
        <div className={styles}>
            {props.children}
        </div>
    )
}

export default Col
