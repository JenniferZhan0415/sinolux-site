import React from "react"

import "./section-content.css"

const sectionContent = (props) => {
    const styles = Array.isArray(props.style) ? props.style.join(" ") : props.style;

    return (
        <div className={styles + " content-wrapper"}>
            {props.children}
        </div>
    )
}

export default sectionContent
