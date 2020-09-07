import React, {Component} from "react"
// import {Link} from "gatsby"

const imgWrapper = {
    width: "100%"
}

const contentWrapper = {
    textAlign: "center",
    marginTop: "5%"
}

const date = {
    fontSize: "14pt",
    fontWeight: "400",
    fontStyle: "italic"
}

class Cover extends Component {
    constructor(props) {
        super(props)

        this.children = React.Children.toArray(props.children)
        this.width = props.width
        this.coverStyle = {
            position: "absolute",
            width: this.width,
            border: "2px solid black"
        }
        this.coverClass = props.className

        this.dest = props.external
    }

    render() {
        return (
            <a href={this.dest} target="_blank" style={this.coverStyle} className={this.coverClass}>
                <div style={imgWrapper}>{this.children[0]}</div>
                <div style={contentWrapper}>
                    <div>{this.children[1]}</div>
                    <div style={date}>{this.children[2]}</div>
                </div>
            </a>
        )
    }
}

export default Cover
