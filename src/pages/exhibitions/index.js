import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Exhibitions from "../../components/exhibitions/exhibitions"

const ExhibitionPage = () => (
  <Layout noScroll="True">
    <SEO
      title="Exhibitions"
      description="Sinolux Film Exhibitions"
      lang="en"
    />

    <Exhibitions/>

  </Layout>
)

export default ExhibitionPage
