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
            backgroundImage: file(relativePath: { eq: "home/events.jpg" }) {
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

const HomeEvents = () => {
    return (
        <Section>
            <SectionBackground>
                <Background/>
            </SectionBackground>

            <SectionContent>
                <h1 className="en-header">COMMUNITY EVENTS</h1>
                <h1 className="zh-header">观影活动</h1>
                <button>LEARN MORE</button>
            </SectionContent>
        </Section>
    )
}

export default HomeEvents
