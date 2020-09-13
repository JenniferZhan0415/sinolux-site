import React, {Component} from "react"

class ScrollAbsIndicator extends Component {
    constructor(props) {
        super(props)

        this.children = props.children
        this.state = {
            scrolled: 0,
            width: window.innerWidth,
            height: window.innerHeight
        }

        this.scrollHandler = this.scrollHandler.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        // attach onwheel event listener
        const e = document.querySelector('main')
        e.onwheel = this.scrollHandler

        // attach resize event listener
        // this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener("onwheel", this.scrollHandler)
        window.removeEventListener('resize', this.updateWindowDimensions)
    }

    scrollHandler(event) {
        event.preventDefault()

        let scrolled = this.state.scrolled + event.deltaY
        scrolled = Math.min(100, Math.max(-100, scrolled))

        this.setState({scrolled: scrolled})
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        if (this.state.width >= 700)
            return (
                <>
                    {React.cloneElement(this.children, { scrolled: this.state.scrolled })}
                </>
            )
        else
            return (
                <>
                    {this.children}
                </>
            )
    }
}

export default ScrollAbsIndicator
