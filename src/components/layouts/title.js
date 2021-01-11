import React from "react"

import "./title.scss"

const Title = (props) => {
    return (
        <div className="title">
            {props.children}
		</div>
    )
}

const Subtitle = (props) => {
    return (
        <div className={"subtitle " + props.className} style={props.style}>
            {props.children}
		</div>
    )
}

const Subsubtitle = (props) => {
    return (
        <div className={"subsubtitle " + props.className} style={props.style}>
            {props.children}
		</div>
    )
}

const PageTitle = (props) => {
    let className = "pageTitle"
    if (props.className) className += " " + props.className

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default Title
export {
    Subtitle,
    Subsubtitle,
    PageTitle
}
