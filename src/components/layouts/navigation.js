import React from "react"

const Nav = (props) => {
    const style = {
        position: "fixed",
        top: "150px",
        left: "0px",
        paddingLeft: "30px",

        width: "350px",
        height: "60%",

        zIndex: "4"
    }

    return (
        <div style={style} className={props.className}>
            {props.children}
        </div>
    )
}

export default Nav
