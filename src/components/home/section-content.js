import React from "react"

import "./section-content.css"

const sectionContent = ({children}) => {
    return (
        <div className="content-wrapper">
            {children}
        </div>
    )
}

export default sectionContent
