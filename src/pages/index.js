import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from "../components/home/home"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Sinolux Homepage"
      lang="en"
    />

    <Home/>
  </Layout>
)

export default IndexPage
