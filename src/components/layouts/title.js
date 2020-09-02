import React from "react"
import {Link} from "gatsby"

import "./title.scss"

const Title = (props) => {
    return (
        <div className="title">
            <Link to="/">
                {props.children}
            </Link>
		</div>
    )
}

const Subtitle = (props) => {
    return (
        <div className="subtitle">
            {props.children}
		</div>
    )
}

export default Title
export {
    Subtitle
}
