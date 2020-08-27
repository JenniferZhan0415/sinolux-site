import React from "react"

import "./image.css"

const ImWrapper = (props) => {
    let styles = "im-wrapper";
    const inputStyles = Array.isArray(props.style) ? props.style.join(" ") : props.style;
    if (inputStyles) styles += " " + inputStyles;

    return (
        <div className={styles}>
            {props.children}
        </div>
    )
}

export default ImWrapper
