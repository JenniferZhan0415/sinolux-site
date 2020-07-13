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
            lg: file(relativePath: { eq: "home/retro/lg.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            med: file(relativePath: { eq: "home/retro/med.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            sm: file(relativePath: { eq: "home/retro/sm.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            mob: file(relativePath: { eq: "home/retro/mobile.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    
    const sources = [
        data.mob.childImageSharp.fluid,
        {
            ...data.lg.childImageSharp.fluid,
            media: `(min-width: 1250px)`
        },
        {
            ...data.med.childImageSharp.fluid,
            media: `(min-width: 850px)`
        },
        {
            ...data.sm.childImageSharp.fluid,
            media: `(min-width: 600px)`
        }
    ]

    return <Img fluid={sources}/>
}

const HomeRetro = () => {
    return (
        <Section>
            <SectionBackground>
                <Background/>
            </SectionBackground>

            <SectionContent>
                <h3 className={`en`}>TORONTO, CANADA・DECEMBER 7 - 8TH, 2019</h3>
                <h3 className={`zh`}>多伦多， 加拿大・二零一九年 十二月 七日 - 八日</h3>
                <h1 className={`en-header lg`}>LOVE & BRUISES / A LOU YE RETROSPECTIVE</h1>
                <h1>
                    <span className={`zh-header md`}>爱与伤 /</span>
                    <span className={`kaiti lg`}>&nbsp; 娄烨 &nbsp;</span>
                    <span className={`zh-header md`}>电影回顾展</span>
                </h1>
            </SectionContent>
        </Section>
    )
}

export default HomeRetro
