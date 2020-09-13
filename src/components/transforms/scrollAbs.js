import React, {Component} from "react"

class ScrollAbsIndicator extends Component {
    constructor(props) {
        super(props)

        this.children = props.children
        this.state = {
          scrolled: 0
        }

        this.scrollHandler = this.scrollHandler.bind(this)
    }

    componentDidMount() {
        const e = document.querySelector('main')
        e.onwheel = this.scrollHandler
    }

    componentWillUnmount() {
        window.removeEventListener("onwheel", this.scrollHandler)
    }

    scrollHandler(event) {
        event.preventDefault()

        let scrolled = this.state.scrolled + event.deltaY
        scrolled = Math.min(100, Math.max(-100, scrolled))

        this.setState({scrolled: scrolled})
    }

    render() {
        return (
            <>
                {React.cloneElement(this.children, { scrolled: this.state.scrolled })}
            </>
        )
    }
}

export default ScrollAbsIndicator
