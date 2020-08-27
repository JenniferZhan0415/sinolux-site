import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeRetro from "../components/home/retro/retro"
import HomeEvents from "../components/home/events/events"
import HomeReviews from "../components/home/reviews/reviews"

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
    {/* <hr/> */}
    <HomeReviews/>
  </Layout>
)

export default IndexPage
