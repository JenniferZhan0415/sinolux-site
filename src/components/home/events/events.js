import React from "react"

import Section from "../section"
import SectionContent from "../section-content"
import SectionBackground from "../section-background"
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
                <h2 className={`en md`}>YEAR-ROUND COMMUNITY EVENTS</h2>
                <h2 className={`zh md`}>全年观影团活动</h2>

                <div className={styles.description}>
                    <p><strong>Amour 爱 (2012)</strong></p>
                    <p><i>Michael Haneke 迈克尔・哈内克</i></p>
                    <p><i>France 法国</i></p>
                </div>

                <h3 className={`en button ` + styles.button}>
                    <Button>
                        LEARN MORE &rarr;
                    </Button>
                </h3>
            </SectionContent>
        </Section>
    )
}

export default HomeEvents
