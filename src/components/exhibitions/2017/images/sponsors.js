import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {Subtitle, Subsubtitle} from "../../../layouts/title"
import styles from "../content.module.scss"

const style = {
    position: "relative",
    top: "10%",
    left: "-15%",

    width: "800px",
    height: "auto",

    zIndex: "0"
}

const Sponsors = (props) => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            src: file(relativePath: { eq: "2017/sponsors.png" }) {
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

    return (
        <div className={styles.content}>
            <Subsubtitle>THANKS TO OUR SPONSORS</Subsubtitle>
            <Img fluid={sources} style={style} imgStyle={props.imgStyle}/>
        </div>
    )
}

export default Sponsors
