import React, {Component} from "react"

class ScrollIndicator extends Component {
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
        return (
            <>
                {React.cloneElement(this.children, { scrolled: this.state.scrolled })}
            </>
        )
    }
}

export default ScrollIndicator
