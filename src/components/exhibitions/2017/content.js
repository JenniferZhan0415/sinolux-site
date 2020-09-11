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
                    <div className={styles.eventDetail}>
                        <p className={styles.when}>TIME: 2017/10/7, 2017/10/14 - LOCATION: Innis Town Hall, 2 Sussex Ave</p><br/><br/>
                        <p className={styles.where}>LOCATION: Innis Town Hall, 2 Sussex Ave - TIME: 2017/10/7, 2017/10/14</p>
                    </div>
                </div>

                <div className={styles.nav}>
                    <p>SCREENINGS<br/>展映片单</p>
                    <div className={styles.screenings}>
                        <p>
                            <a href="#cross-current" className="link-en">CROSSCURRENT</a><br/>
                            <a href="#cross-current" className="link-zh">长江图</a>
                        </p>
                        <p>
                            <a href="#blue-gate" className="link-en">BLUE GATE CROSSING</a><br/>
                            <a href="#blue-gate" className="link-zh">蓝色大门</a>
                        </p>
                        <p>
                            <a href="#free-easy" className="link-en">FREE AND EASY</a><br/>
                            <a href="#free-easy" className="link-zh">轻松 + 愉快</a>
                        </p>
                        <p>
                            <a href="#summer" className="link-en">THE SUMMER IS GONE</a><br/>
                            <a href="#summer" className="link-zh">八月</a>
                        </p>
                    </div>
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
