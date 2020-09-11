import React from "react"

import Section from "../../layouts/section"
import Content from "./content"
import Footer from "../../footer/footer"

import styles from "./e2019.module.scss"

const E2019 = () => {
    return (
        <Section>
            <Content/>
            <Footer>
                <a href="#2019">
                    2019<br/>
                    娄烨 - 回顾展<br/>
                    Lou Ye / A Retrospective<br/>
                </a>
            </Footer>
        </Section>
    )
}

export default E2019
