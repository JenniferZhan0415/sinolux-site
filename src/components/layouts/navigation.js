import React from "react"

const Nav = (props) => {
    const style = {
        position: "fixed",
        top: "150px",
        left: "0px",
        display: "flex",
        width: "250px",
        height: "50%"
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Nav
