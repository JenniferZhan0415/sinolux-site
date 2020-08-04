import React from "react"

import Section from "./section"
import SectionBackground from "./section-background"
import Background from "./retro-background"
import SectionContent from "./section-content"

const HomeRetro = () => {
    return (
        <Section>
            <SectionBackground>
                <Background/>
            </SectionBackground>

            <SectionContent>
                <h3 className={`en`}>TORONTO, CANADA・DECEMBER 7 - 8TH, 2019</h3>
                <h3 className={`zh`}>多伦多， 加拿大・二零一九年 十二月 七日 - 八日</h3>
                <h1 className={`en-header lg`}>LOVE & BRUISES / A LOU YE RETROSPECTIVE</h1>
                <h1>
                    <span className={`zh-header md`}>爱与伤 /</span>
                    <span className={`kaiti lg fadein-slow`}>&nbsp; 娄烨 &nbsp;</span>
                    <span className={`zh-header md`}>电影回顾展</span>
                </h1>
            </SectionContent>
        </Section>
    )
}

export default HomeRetro
