import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Section from "./section"
import SectionBackground from "./section-background"
import SectionContent from "./section-content"

const Background = () => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            backgroundImage: file(relativePath: { eq: "home/media.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    
    const imageData = data.backgroundImage.childImageSharp.fluid

    return <Img fluid={imageData}/>
}

const HomeMedia = () => {
    return (
        <Section>
            <SectionBackground>
                <Background/>
            </SectionBackground>

            <SectionContent>
                <h1 className="en-header">INTERVIEWS</h1>
                <h1 className="zh-header">采访 报道</h1>
                <button>READ MORE</button>
                <h1 className="en-header">REVIEWS</h1>
                <h1 className="zh-header">电影评论</h1>
                <button>READ MORE</button>
            </SectionContent>
        </Section>
    )
}

export default HomeMedia
