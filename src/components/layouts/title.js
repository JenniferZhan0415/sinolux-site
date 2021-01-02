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
        <div className={"subtitle " + props.className}>
            {props.children}
		</div>
    )
}

const Subsubtitle = (props) => {
    return (
        <div className={"subsubtitle " + props.className}>
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
