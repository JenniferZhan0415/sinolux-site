import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Cover190418 = (props) => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            src: file(relativePath: { eq: "events/2019/long-days-journey-into-night.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    
    const sources = [
        data.src.childImageSharp.fluid,
    ]

    return <Img fluid={sources} style={props.style}/>
}

export default Cover190418
