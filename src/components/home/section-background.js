import React from "react"

import "./section-background.css"

const SectionBackground = ({children}) => {
    return (
        <div className="section-bg">
            <div className="background-wrapper">
                {children}
            </div>
        </div>
    )
}

export default SectionBackground
