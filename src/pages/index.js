import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeRetro from "../components/home/retro/retro"
import HomeEvents from "../components/home/events/events"

const IndexPage = () => (
  <Layout>
    <SEO
      title="SL Home"
      description="Sinolux Homepage"
      lang="en"
    />

    <HomeRetro/>
    {/* <hr/> */}
    <HomeEvents/>
  </Layout>
)

export default IndexPage
