import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Interviews from "../../components/interviews/interviews"

const InterviewReviewIndex = () => (
  <Layout>
    <SEO
      title="Interviews & Reviews"
      description="Sinolux Interviews & Reviews"
      lang="en"
    />

    <Interviews/>

  </Layout>
)

export default InterviewReviewIndex
