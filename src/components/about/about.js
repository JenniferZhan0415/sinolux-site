import React from "react"
import { Link } from "gatsby"

import Background from "./background"
import {Subtitle} from "../layouts/title"
import Content from "./content"
import HTrans from "../transforms/horizontal"

import styles from "./about.module.scss"

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.title}>
                <Subtitle>
                    <Link to="/about-us">
                        ABOUT US
                    </Link>
                </Subtitle>
            </div>

            <HTrans>
                <Content/>
            </HTrans>

            <Background/>
        </div>
    )
}

export default About
