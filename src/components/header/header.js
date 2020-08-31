import PropTypes from "prop-types"
import React from "react"

import Title from "../layouts/title"

import "./header.css"

const Header = ({ siteTitle }) => (
	<header className="header">
		<Title>
			SINO<span className="italic">LUX</span>
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
