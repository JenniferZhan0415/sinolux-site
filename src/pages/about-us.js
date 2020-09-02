import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about/about"

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      description="Sinolux About Us"
      lang="en"
    />

    <About/>

  </Layout>
)

export default AboutPage
