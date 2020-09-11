import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Interviews from "../../components/interviews/interviews"

const InterviewIndex = () => (
  <Layout>
    <SEO
      title="Interviews"
      description="Sinolux Interviews"
      lang="en"
    />

    <Interviews/>

  </Layout>
)

export default InterviewIndex
