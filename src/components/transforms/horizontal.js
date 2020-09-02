import React, {Component} from "react"

import Section from "../layouts/section"

class HTrans extends Component {
    constructor(props) {
        super(props)

        this.children = props.children
        this.state = {
          scrolled: 0
        }

        this.scrollHandler = this.scrollHandler.bind(this)
    }

    componentDidMount() {
        const e = document.querySelector(`main`)
        e.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler)
    }

    scrollHandler(event) {
        const e = event.target
        const percentage = e.scrollTop / (e.scrollHeight - e.clientHeight)
        this.setState({scrolled: percentage})
    }

    render() {
        const paddingLeft = {
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "0",

            width: `${40 - (40 - 25) * this.state.scrolled}%`,
            height: "100%",

            backgroundColor: "white"
        }

        const paddingRight = {
            position: "fixed",
            top: "0",
            right: "0",
            zIndex: "0",

            width: `${40 - (40 - 25) * this.state.scrolled}%`,
            height: "100%",

            backgroundColor: "white"
        }

        return (
            <Section>
                {this.children}

                {/* paddings */}
                <div style={paddingLeft}></div>
                <div style={paddingRight}></div>
            </Section>
        )
    }
}

export default HTrans
