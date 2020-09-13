import React from "react"

import Section from "../layouts/section"

const HTrans = (props) => {
    const paddingLeft = {
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "0",

        width: `${40 - (40 - 25) * props.scrolled}%`,
        height: "100%",

        backgroundColor: "white"
    }

    const paddingRight = {
        position: "fixed",
        top: "0",
        right: "0",
        zIndex: "0",

        width: `${40 - (40 - 25) * props.scrolled}%`,
        height: "100%",

        backgroundColor: "white"
    }

    return (
        <Section>
            {props.children}

            {/* paddings */}
            <div style={paddingLeft}></div>
            <div style={paddingRight}></div>
        </Section>
    )
}

export default HTrans
