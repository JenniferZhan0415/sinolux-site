import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const wrapperStyle = {
    border: "2px solid black"
}

const CatIm = (props) => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            src: file(relativePath: { eq: "2021/cat/cat.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1400) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
        }
    `)
    
    const sources = [
        data.src.childImageSharp.fluid,
    ]

    // return <Img fluid={sources}/>
    return <Img fluid={sources} style={wrapperStyle} className={props.className}/>
}

export default CatIm
