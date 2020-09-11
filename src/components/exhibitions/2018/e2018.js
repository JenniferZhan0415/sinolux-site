import React from "react"

import Section from "../../layouts/section"
import Content from "./content"
import Footer from "../../footer/footer"

import styles from "./e2018.module.scss"

const E2018 = () => {
    return (
        <Section>
            <Content/>
            <Footer>
                <a href="#2018">
                    2018<br/>
                    张国荣 - 回顾展<br/>
                    Leslie Cheung / A Retrospective<br/>
                </a>
            </Footer>
        </Section>
    )
}

export default E2018
