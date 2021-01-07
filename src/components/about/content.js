import React from "react"

import Section from "../layouts/section"
import Row from "../layouts/row"
import {Subtitle} from "../layouts/title"

import styles from "./content.module.scss"

const about = [
    <p>
        We are the first Chinese film exhibition that partners with <a href="https://tiff.net/">TIFF</a> since 2018. &nbsp;
        <span className="italic">Sinolux Film</span> is a federal registered not-for-profit organization based in Toronto 
        which focuses on bringing together local communities through cinema. 
        We aims to enrich the experience of local film audience 
        through the promotion and exhibitions of Chinese and Chinese-language films.
    </p>,
    <p>
        我们是第一个与多伦多国际电影节（<a href="https://tiff.net/">TIFF</a>）成为伙伴关系的华语影展，也是第一个近年连续在 <a href="https://www.tiff.net/visit">TIFF BELL LIGHTBOX</a> 举办的华语影展。华光电影是加拿大联邦注册的非盈利组织，专注于电影文化交流活动并致力于将多元的华语电影佳作介绍给更多的加拿大观众。力求通过电影文化交流，打破文化隔膜和偏见。
    </p>,
    <p>
        我们的名字 “华光” 来源于两个拉丁词汇 —— 'SINO' 和 'LUX'，分别代表着 “华语” 和 “光”，意即用优秀的华语电影点亮中华文化之光。
    </p>,
    <p>
        <br/>
        <span className="italic">SINOLUX</span> is a made-up word consisting of two Latin noun phrases, <span className="italic">SINO</span> and <span className="italic">LUX</span> which means <span className="italic">Chinese</span> and <span className="italic">Light</span> respectively. Together, they demonstrate our motivation and determination of bringing the finest Chinese-language films to Canadian audience.
    </p>
]

const Content = () => {
    return (
        <Section className={styles.rows + " text-normal"}>
            <Subtitle className="italic">About / 关于</Subtitle>
            <Row className={styles.row}>
                {about[3]}
            </Row>
            <Row className={styles.row}>
                {about[2]}
            </Row>
            <Row className={styles.row}>
                {about[0]}
            </Row>
            <Row className={styles.row}>
                {about[1]}
            </Row>
            <Subtitle className="italic">Team / 工作人员</Subtitle>
            <Row>
                <p>
                    <br/>
                    <span className="red">小玄儿</span><br/>
                    <span className="italic">Jennifer</span><br/>
                    创始人 / 策展人 / 运营 / 撰稿<br/>
                    Founder / Programmer /<br/>
                    Operating Manager / Writer<br/>
                    E: <a href="mailto:jennifer@sinoluxfilm.com">jennifer@sinoluxfilm.com</a><br/>
                    IG: <a href="https://www.instagram.com/xuanyi.zhan/">@xuanyi.zhan</a>
                </p>
            </Row>
            <Row>
                <p>
                    <span className="yellow">黄昕</span><br/>
                    <span className="italic">Xin Huang</span><br/>
                    创始人 / 策展人<br/>
                    Founder / Programmer
                </p>
            </Row>
            <Row>
                <p>
                    <span className="blue">时雨</span><br/>
                    <span className="italic">Winnie</span><br/>
                    运营 / 撰稿 / 记者<br/>
                    Operating Manager / Writer / Reporter
                </p>
            </Row>
            <Row>
                <p>
                    <span className="green">雅淳</span><br/>
                    <span className="italic">Chuck</span><br/>
                    运营 / 策划<br/>
                    Event Coordinator
                </p>
            </Row>
            <Row>
                <p>
                    <span className="red">Sandy Long</span><br/>
                    运营 / 记者<br/>
                    Operating Manager / Reporter
                </p>
            </Row>
            <Row>
                <p>
                    <span className="yellow">Erin Zhou</span><br/>
                    社团联系<br/>
                    Marketing & Communication
                </p>
            </Row>
            <Row>
                <p>
                    <span className="blue">易桥</span><br/>
                    <span className="italic">Yi Qiao</span><br/>
                    财务顾问<br/>
                    Financial Consultant
                </p>
            </Row>
            <Row>
                <p>
                    <span className="green">赵四</span><br/>
                    <span className="italic">Nicholas Zhao</span><br/>
                    艺术总监 / 网站<br/>
                    Art Director / Web Design<br/>
                    W: IPR<br/>
                    IG: <a href="https://www.instagram.com/inpraiseofdionysus/">@in praise of dionysus</a><br/>
                </p>
            </Row>
        </Section>
    )
}

export default Content
