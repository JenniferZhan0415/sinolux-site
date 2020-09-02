import React from "react"

import Section from "../layouts/section"
import Row from "../layouts/row"

import styles from "./content.module.scss"

const about = {
    en: (<p>
        We are the first Chinese film exhibition that partners with <a className="en-link" href="https://tiff.net/">TIFF</a> since 2018. 
        Sinolux Film is a federal registered not-for-profit organization based in Toronto 
        which focuses on bringing together local communities through cinema. 
        We aims to enrich the experience of local film audience 
        through the promotion and exhibitions of Chinese and Chinese-languaged films.
    </p>),
    zh: (<p>
        我们是第一个与<a className="zh-link" href="https://tiff.net/">多伦多国际电影节</a>（TIFF）成为伙伴关系的<br/>
        华语影展，也是第一个近年连续在 <a className="en-link" href="https://www.tiff.net/visit">TIFF BELL LIGHTBOX</a> 举办的华语影展。华光电影是加拿大联邦注册的非盈利组织，专注于<br/>
        电影文化交流活动，并致力于将多元的华语电影佳作介绍给更多的加拿大观众，力求通过电影文化交流，打破文化隔膜和偏见。
    </p>),
}

const Content = () => {
    return (
        <Section className={styles.rows}>
            <Row className={styles.row}>
                {about.en}
            </Row>
            <Row className={styles.row}>
                {about.zh}
            </Row>
        </Section>
    )
}

export default Content
