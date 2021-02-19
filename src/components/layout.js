/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import "./layout.css"

const noScroll = {
  overflowX: "hidden",
  overflowY: "hidden"
}

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let main = <main>{props.children}</main> 
  if (props.noScroll)
    main = <main style={noScroll}>{props.children}</main>

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {main}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
