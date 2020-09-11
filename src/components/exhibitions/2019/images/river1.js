import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const River1 = (props) => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            src: file(relativePath: { eq: "2019/river2.png" }) {
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

export default River1
