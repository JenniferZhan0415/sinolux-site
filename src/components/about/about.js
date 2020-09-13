import React from "react"
import { Link } from "gatsby"

import Background from "./background"
import Section from "../layouts/section"
import {Subtitle} from "../layouts/title"
import Content from "./content"

import ScrollIndicator from "../transforms/scroll"
import HTrans from "../transforms/horizontal"

import styles from "./about.module.scss"

const About = () => {
    return (
        <Section>
            <div className={styles.title}>
                <Subtitle>
                    <Link to="/about-us">
                        ABOUT US
                    </Link>
                </Subtitle>
            </div>

            <ScrollIndicator>
                <HTrans>
                    <Content/>
                </HTrans>
            </ScrollIndicator>

            <Background/>
        </Section>
    )
}

export default About
