import React from "react"
import {Link} from "gatsby"

const linkStyle = {
	// textDecoration: "none",
	// color: "black"
}

const Button = ({children}) => {
    return (
        <div>
            <Link to="/" style={linkStyle}>
                {children}
            </Link>
        </div>
    )
}

export default Button
