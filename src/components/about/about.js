import React from "react"
// import { Link } from "gatsby"

import Section from "../layouts/section"
// import {Subtitle} from "../layouts/title"
import Content from "./content"

import ScrollIndicator from "../transforms/scroll"
import Rotate from "../transforms/rotate/rotate"

// import styles from "./about.module.scss"

const About = () => {
    return (
        <Section>
            {/* <div className={styles.title}>
                <Subtitle>
                    <Link to="/about-us">
                        ABOUT US
                    </Link>
                </Subtitle>
            </div> */}

            <Content/>

            <ScrollIndicator>
                <Rotate/>
            </ScrollIndicator>

        </Section>
    )
}

export default About
