import React from "react"

import Background from "./background"
import Section from "../layouts/section"
import Title from "../layouts/title"

import styles from "./about.module.css"
import { Link } from "gatsby"

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.title}>
                <Title>
                    <Link to="about-us">
                        ABOUT US<br/>关于我们
                    </Link>
                </Title>
            </div>


            <Background/>

            <Section>

            </Section>
        </div>
    )
}

export default About
