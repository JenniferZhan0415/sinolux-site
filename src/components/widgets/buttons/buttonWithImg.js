import React, {Component} from "react"

import "./buttonWithImg.css"

class BWI extends Component {
    /**
     * Initialize a new drop down component. 
     *
     * @param {object} props 
     */
    constructor(props) {
        super(props)

        this.numChildren = React.Children.count(props.children)
        this.children = props.children
        this.childrenWithoutImg = React.Children.map(props.children, (child, i) => {
            if (i < this.numChildren - 1)
                return child
            return
        })

        this.displayImg = this.displayImg.bind(this)
        this.hideImage = this.hideImage.bind(this)

        this.state = {
            hover: false
        }
    }

    displayImg() {
        this.setState({hover: true})
    }

    hideImage() {
        this.setState({hover: false})
    }

    render() {
        let content
        
        if (this.state.hover) {
            content = this.children;
        } else {
            content = this.childrenWithoutImg
        }

        return (
            <div className="button" onMouseEnter={this.displayImg} onMouseLeave={this.hideImage}>
                {content}
            </div>
        )
    }
}

export default BWI
