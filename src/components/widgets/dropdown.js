import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, {Component} from "react"

import "./dropdown.css"

const linkStyles = {
	textDecoration: "none",
	color: "black"
}

const DownIcon = () => {
	const data = useStaticQuery(graphql`
        query {
            icon: file(relativePath: { eq: "icons/down.png" }) {
                childImageSharp {
                    fixed(width: 20) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
	`)

	return <Img fixed={data.icon.childImageSharp.fixed}/>
}

class Dropdown extends Component {
    /**
     * Initialize a new drop down component. 
     *
     * @param {object} props 
     */
    constructor(props) {
        super(props)

        this.displayMenu = this.displayMenu.bind(this)
        this.hideMenu = this.hideMenu.bind(this)

        this.state = {
            isOpen: false
        }
    }

    displayMenu() {
        this.setState({isOpen: true})
    }

    hideMenu() {
        this.setState({isOpen: false})
    }

    render() {
        let list;
        
        if (this.state.isOpen) {
            list = [
                <Link to="/" style={linkStyles}>
                    {this.props.options[0]}
                </Link>,
                <Link to="/" className="fadein-fast" style={linkStyles}>
                    {this.props.options[1]}
                </Link>,
                <Link to="/" className="fadein-fast" style={linkStyles}>
                    {this.props.options[2]}
                </Link>
            ]
        } else {
            list = 
            <Link to="/" style={linkStyles}>
                {this.props.options[0]}
            </Link>
        }

        return (
            <div className="dropdown" onMouseEnter={this.displayMenu} onMouseLeave={this.hideMenu}>
                <div className="dropdown-menu">
                    {list}
                </div>
                <div className="dropdown-icon">
                    <DownIcon/>
                </div>
            </div>
        )
    }
}

export default Dropdown
