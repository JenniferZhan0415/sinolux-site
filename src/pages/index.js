import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeRetro from "../components/home/retro"

const IndexPage = () => (
  <Layout>
    <SEO title="SL Home" description="Sinolux Homepage" lang="en"/>
    <HomeRetro/>
  </Layout>
)

export default IndexPage
