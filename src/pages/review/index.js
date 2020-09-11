import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Reviews from "../../components/reviews/reviews"

const ReviewIndex = () => (
  <Layout>
    <SEO
      title="Reviews"
      description="Sinolux Reviews"
      lang="en"
    />

    <Reviews/>

  </Layout>
)

export default ReviewIndex
