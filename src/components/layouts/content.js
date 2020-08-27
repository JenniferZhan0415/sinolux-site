import React from "react"

import "./content.css"

const ContentWrapper = (props) => {
    let styles = "content";
    const inputStyles = Array.isArray(props.style) ? props.style.join(" ") : props.style;
    if (inputStyles) styles += " " + inputStyles;

    return (
        <div className={styles}>
            {props.children}
        </div>
    )
}

export default ContentWrapper
