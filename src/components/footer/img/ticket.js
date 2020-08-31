import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TicketImg = () => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            src: file(relativePath: { eq: "footer/100y.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    
    const source = data.src.childImageSharp.fluid

    const wrapperStyle = {
        display: "inline-block",
        position: "fixed",
        width: "320px",
        height: "155px",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }

    return <Img fluid={source} style={wrapperStyle}/>
}

export default TicketImg
