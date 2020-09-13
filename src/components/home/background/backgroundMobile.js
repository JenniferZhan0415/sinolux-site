import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BackgroundMobile = (props) => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            src: file(relativePath: { eq: "home/polygon.png" }) {
                childImageSharp {
                    fixed(quality: 90, width: 400) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    
    const sources = [
        data.src.childImageSharp.fixed,
    ]

    return <Img fixed={sources} style={props.style} className={props.className}/>
}

export default BackgroundMobile
