import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Cover200826 = (props) => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            src: file(relativePath: { eq: "interviews/2020/jindu.jpg" }) {
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

export default Cover200826
