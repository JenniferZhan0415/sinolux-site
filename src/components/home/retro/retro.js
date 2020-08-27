import React from "react"

import Section from "../../section/section"
import SectionBackground from "../../section/section-background"
import Background from "./background"
import SectionContent from "../../section/section-content"
import Button from "../../widgets/button"

import styles from "./retro.module.css"

const HomeRetro = () => {
    return (
        <Section>
            <SectionBackground style={styles.sectionBg}>
                <Background/>
            </SectionBackground>

            <SectionContent style={styles.contentWrapper}>
                <p className={`en md`}>TORONTO, CANADA・DECEMBER 7 - 8TH, 2019</p>
                <p className={`zh md`}>多伦多， 加拿大・二零一九年 十二月 七日 - 八日</p>
                <p className={`en xlg`}>LOVE + BRUISES / A LOU YE RETROSPECTIVE</p>
                <p>
                    <span className={`zh-header lg`}>爱与伤 /</span>
                    <span className={`kaiti xlg fadein-slow`}>&nbsp; 娄烨 &nbsp;</span>
                    <span className={`zh-header lg`}>电影回顾展</span>
                </p>

                <p className={`en md button ` + styles.button}>
                    <Button to="/">
                        LEARN MORE &rarr;
                    </Button>
                </p>
            </SectionContent>
        </Section>
    )
}

export default HomeRetro
