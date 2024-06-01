import PropTypes from "prop-types"
import React from "react"
import {Link} from "gatsby"

import Title from "../layouts/title"

import * as styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
	<header className={styles.header}>
		<Title>
			<Link to="/">
				SINO<span className="italic">LUX</span><br/>
				FILM
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
