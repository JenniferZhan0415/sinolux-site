import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Events from "../../components/events/events"

const EventsIndex = () => (
  <Layout>
    <SEO
      title="Events"
      description="Sinolux Community Events"
      lang="en"
    />

    <Events/>

  </Layout>
)

export default EventsIndex
