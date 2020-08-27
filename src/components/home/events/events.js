import React from "react"

import Section from "../../section/section"
import SectionContent from "../../section/section-content"
import SectionBackground from "../../section/section-background"
import Background from "./background"
import Button from "../../widgets/button"

import styles from "./events.module.css"

const HomeEvents = () => {
    return (
        <Section>
            <SectionBackground style={styles.sectionBg}>
                <Background/>
            </SectionBackground>

            <SectionContent style={styles.contentWrapper}>
                <p className={`en lg`}>YEAR-ROUND COMMUNITY EVENTS</p>
                <p className={`zh lg`}>全年观影团活动</p>

                <div className={styles.description}>
                    <p><strong>Amour 爱（2012）</strong></p>
                    <p><i>Michael Haneke 迈克尔・哈内克</i></p>
                    <p><i>France 法国</i></p>
                </div>

                <p className={`en md button ` + styles.button}>
                    <Button to="/">
                        LEARN MORE &rarr;
                    </Button>
                </p>
            </SectionContent>
        </Section>
    )
}

export default HomeEvents
