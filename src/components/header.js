import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"
import Dropdown from "./widgets/dropdown"
// import Menu from "./widgets/menu"

const linkStyles = {
	textDecoration: "none",
	color: "black"
}

const sinoStyles = {
	textDecoration: "none",
	fontWeight: 200,
	color: 'black'
}

const Header = ({ siteTitle }) => (
	<header className="header">
		<div className="nav-bar">

			<div className="nav-left">
				<h2 className="site-title">
					<div>
					<Link
						to="/"
						style={sinoStyles}
					>
						{siteTitle}
					</Link>
					</div>
				</h2>
			</div>

			<div className="nav-middle">
				<div className="nav-item">
					<Dropdown options={[2019, 2018, 2017]}/>
				</div>
				<div className="nav-item">
					<div>
						<Link to="/" style={linkStyles}>
							About Us
						</Link>
					</div>
				</div>
			</div>

			<div className="nav-right">
				<div className="nav-item-lg">
					<h3>
						<a href="https://www.tiff.net/">
							TICKETS
						</a>
					</h3>
				</div>
			</div>

			<div className="menu">
				{/* <Menu/> */}
			</div>

		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
