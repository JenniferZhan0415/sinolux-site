import PropTypes from "prop-types"
import React from "react"
import {Link} from "gatsby"

import Title from "../layouts/title"

import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
	<header className={styles.header}>
		<Title>
			<Link to="/">
				SINO<span className="italic">LUX</span><br/>
				FILM<br/>
				<span className="italic serif">(under construction)</span>
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
