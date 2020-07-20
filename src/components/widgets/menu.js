import React, {Component} from "react"
import HamburgerMenu from "react-hamburger-menu"

class Menu extends Component {
    /**
     * Initialize a menu component
     * @param {object} props 
     */
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    
        this.state = {
            isOpen: false
        }
    }

    /**
     * Handle click event
     */
    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    /**
     * Render components
     */
    render() {
        return (
            <HamburgerMenu
                isOpen={this.state.isOpen}
                menuClicked={this.handleClick}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
            />
        )
    }
}

export default Menu
