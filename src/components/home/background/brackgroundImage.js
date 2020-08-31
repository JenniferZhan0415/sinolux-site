import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BackgroundImg = (props) => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            src: file(relativePath: { eq: "home/polygon.png" }) {
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

    const wrapperStyle = props.style
    const imgStyle = props.imgStyle

    return <Img fluid={sources} style={wrapperStyle} imgStyle={imgStyle}/>
}

export default BackgroundImg
