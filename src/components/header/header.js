import PropTypes from "prop-types"
import React from "react"
import {Link} from "gatsby"

import Title from "../layouts/title"

import "./header.css"

const Header = ({ siteTitle }) => (
	<header className="header">
		<Title>
			<Link to="/">
				SINO<span className="italic">LUX</span>
			</Link>
		</Title>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
