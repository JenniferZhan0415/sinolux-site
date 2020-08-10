import React from "react"

import Section from "../section"
import SectionBackground from "../section-background"
import Background from "./background"
import SectionContent from "../section-content"
import Button from "../../widgets/button"

import styles from "./retro.module.css"

const HomeRetro = () => {
    return (
        <Section>
            <SectionBackground style={styles.sectionBg}>
                <Background/>
            </SectionBackground>

            <SectionContent style={styles.contentWrapper}>
                <h3 className={`en`}>TORONTO, CANADA・DECEMBER 7 - 8TH, 2019</h3>
                <h3 className={`zh`}>多伦多， 加拿大・二零一九年 十二月 七日 - 八日</h3>
                <h1 className={`en-header lg`}>LOVE & BRUISES / A LOU YE RETROSPECTIVE</h1>
                <h1>
                    <span className={`zh-header md`}>爱与伤 /</span>
                    <span className={`kaiti lg fadein-slow`}>&nbsp; 娄烨 &nbsp;</span>
                    <span className={`zh-header md`}>电影回顾展</span>
                </h1>

                <h3 className={`en button`}>
                    <Button>
                        LEARN MORE &rarr;
                    </Button>
                </h3>
            </SectionContent>
        </Section>
    )
}

export default HomeRetro
