import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const h1 = {
    position: "absolute",
    top: "50%",
    left: "50%"
  }

  const p = {
    position: "absolute",
    top: "70%",
    left: "15%"
  }

  return (
    <Layout>
      <SEO title="Not found" />
      <h1 style={h1}>NOT FOUND</h1>
      <p style={p}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
