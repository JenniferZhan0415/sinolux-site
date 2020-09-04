import React from "react"

import Section from "../../layouts/section"
import Row from "../../layouts/row"
import Title from "../../layouts/title"

import CrossCurrent from "./films/crossCurrent"
import BlueGate from "./films/blueGate"
import FreeEasy from "./films/freeEasy"
import SummerGone from "./films/summer"
import Sponsors from "./images/sponsors"

import styles from "./content.module.scss"

const about = {
    en: (<p>
        With Blue as our central theme, we will be presenting different styles of contemporary Chinese films. 
        Varying themes and stories will be performed: from the unforgettable innocence of youth, to the 
        bitterness of humorous reality. From the prolonged memories of childhood, to the poetry of life journey.
    </p>),
    zh: (<p>
        我们是第一个与<a className="zh-link" href="https://tiff.net/">多伦多国际电影节</a>（TIFF）成为伙伴关系的<br/>
        华语影展，也是第一个近年连续在 <a className="en-link" href="https://www.tiff.net/visit">TIFF BELL LIGHTBOX</a> 举办的华语影展。华光电影是加拿大联邦注册的非盈利组织，专注于<br/>
        电影文化交流活动，并致力于将多元的华语电影佳作介绍给更多的加拿大观众，力求通过电影文化交流，打破文化隔膜和偏见。
    </p>),
}

const Content = () => {
    return (
        <Section className={styles.rows + " fadein-fast"}>
            <div className={styles.row} id="2017">
                <Row>
                    <Title>BLUE / FILM EXHIBITION 2017</Title>
                </Row>
                <div>
                    {about.en}
                    <p>WHEN: 10/7, 10/14<br/>WHERE: Innis Town Hall, 2 Sussex Ave</p>
                    {/* <p>时间: 10/7, 10/14<br/>地点: Innis Town Hall, 2 Sussex Ave</p> */}
                </div>
            </div>

            {/* CROSSCURRENT */}
            <CrossCurrent/>

            {/* BLUE GATE */}
            <BlueGate/>

            {/* FREE AND EASY */}
            <FreeEasy/>

            {/* SUMMER IS GONE */}
            <SummerGone/>

            <Sponsors/>
        </Section>
    )
}

export default Content
