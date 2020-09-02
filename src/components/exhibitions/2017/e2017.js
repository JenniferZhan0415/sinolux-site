import React from "react"
import { Link } from "gatsby"

import {Subtitle} from "../../layouts/title"
import Section from "../../layouts/section"
import Nav from "../../layouts/navigation"

import styles from "./e2017.module.scss"

const E2017 = () => {
    return (
        <Section>
            <div className={styles.title}>
                <Subtitle>2017</Subtitle>
                <Subtitle>BLUE</Subtitle>
                <Subtitle>蓝</Subtitle>
            </div>

            <Nav/>

            <Section></Section>
        </Section>
    )
}

export default E2017
