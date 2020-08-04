import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeRetro from "../components/home/retro"

const IndexPage = () => (
  <Layout>
    <SEO
      title="SL Home"
      description="Sinolux Homepage"
      meta={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }
      ]}
      lang="en"/>
    <HomeRetro/>
  </Layout>
)

export default IndexPage
