import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BackgroundInterview = () => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            lg: file(relativePath: { eq: "home/reviews/interview.png" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const sources = [
        // {
        //     ...data.mob.childImageSharp.fluid,
        //     media: `(max-width: 600px)`
        // },
        // {
        //     ...data.sm.childImageSharp.fluid,
        //     media: `(max-width: 850px)`
        // },
        // {
        //     ...data.med.childImageSharp.fluid,
        //     media: `(max-width: 1250px)`
        // },
        data.lg.childImageSharp.fluid,
    ]

    const wrapperStyle = {
        width: "100%",
        height: "100%",
    }

    return <Img fluid={sources} style={wrapperStyle}/>
}

export default BackgroundInterview
