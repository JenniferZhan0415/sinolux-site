import React from "react"

import Section from "../../layouts/section"
import Row from "../../layouts/row"
import Title, {Subtitle} from "../../layouts/title"

import Rouge from "./films/rouge"
import Farewell from "./films/farewell"
import Ash from "./films/ash"
import Sponsors from "./images/sponsors"

import styles from "./content.module.scss"

const about = {
    en: (<p>
        Wander around with Leslie Cheung in Toronto! Watch three most classic movies of belated Leslie Cheung on big screen again only at The 2nd Toronto SinoLux Film Exhibition!
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
                    <Title>Ashes of Time</Title><br/>
                    <Subtitle>A Leslie Cheung Retrospective</Subtitle>
                </Row>
                <div>
                    {about.en}
                    <div className={styles.eventDetail}>
                        <p className={styles.when}>TIME: 2018/12/1 ⇨ 2018/12/2 - LOCATION: TIFF Bell Lightbox</p><br/><br/>
                        <p className={styles.where}>LOCATION: TIFF Bell Lightbox - TIME: 2018/12/1 ⇨ 2018/12/2</p>
                    </div>
                </div>

                <div className={styles.nav}>
                    <p>SCREENINGS<br/>展映片单</p>
                    <div className={styles.screenings}>
                        <p>
                            <a href="#rouge" className="link-en">ROUGE</a><br/>
                            <a href="#rouge" className="link-zh">胭脂扣</a>
                        </p>
                        <p>
                            <a href="#farewell" className="link-en">FAREWELL MY CONCUBINE</a><br/>
                            <a href="#farewell" className="link-zh">霸王别姬</a>
                        </p>
                        <p>
                            <a href="#ash" className="link-en">ASHES OF TIME</a><br/>
                            <a href="#ash" className="link-zh">东邪西毒</a>
                        </p>
                    </div>
                </div>
            </div>

            <Rouge/>

            <Farewell/>

            <Ash/>

            {/* SUMMER IS GONE */}
            {/* <SummerGone/> */}

            <Sponsors/>
        </Section>
    )
}

export default Content
