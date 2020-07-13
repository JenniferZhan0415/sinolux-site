import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeRetro from "../components/home/retro"
import HomeEvents from "../components/home/events"
import HomeMedia from "../components/home/media"

const IndexPage = () => (
  <Layout>
    <SEO title="SL Home" description="Sinolux Homepage" lang="en"/>

    <HomeRetro/>

    <HomeEvents/>

    <HomeMedia/>

    {/* <p>Welcome to your new Sinolux <span role="img" aria-label="sparkles">✨</span> site.</p> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
