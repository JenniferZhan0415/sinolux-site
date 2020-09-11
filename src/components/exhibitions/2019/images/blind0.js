import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Blind0 = (props) => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            src: file(relativePath: { eq: "2019/blind0.jpg" }) {
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

export default Blind0
