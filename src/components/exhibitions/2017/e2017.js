import React from "react"

import Section from "../../layouts/section"
import Content from "./content"
import Footer from "../../footer/footer"

import styles from "./e2017.module.scss"

const E2017 = () => {
    return (
        <Section>
            <Content/>

            <Footer>
                <a href="#2017">
                    2017<br/>
                    BLUE<br/>
                    蓝<br/>
                    <div className={styles.square}/>
                </a>
            </Footer>
        </Section>
    )
}

export default E2017
