import React from "react"

import Section from "../layouts/section"
import Row from "../layouts/row"
import Nav from "../layouts/navigation"
import Footer from "../footer/footer"

import Cover from "../layouts/cover"
import {covers} from "./articals/covers"

import * as styles from "./events.module.scss"


const Events = () => {
    return (
        <Section>
            <Nav className={styles.nav}>
                <p><a href="#2020" className="link-en">2024</a></p>
                <p><a href="#2020" className="link-en">2023</a></p>
                <p><a href="#2020" className="link-en">2022</a></p>
                <p><a href="#2020" className="link-en">2021</a></p>
                <p><a href="#2020" className="link-en">2020</a></p>
                <p><a href="#2019" className="link-en">2019</a></p>
                <p><a href="#2018" className="link-en">2018</a></p>
                <p><a href="#2017" className="link-en">2017</a></p>
            </Nav>

            <div className={styles.rows}>
                <Cover className={styles.cover0} external="https://mp.weixin.qq.com/s/mKRrG7EA6A1ZnRHOzI1lmg">
                    {covers["20160803"]}
                    {"如何在一票难求的多伦多国际电影节，求得一票？！"}
                    {"2016/08/03"}
                </Cover>
                <Cover className={styles.cover1} external="https://mp.weixin.qq.com/s/A9bZgcvI1nPCpJapeUc2jw">
                    {covers["20170907"]}
                    {"第42届TIFF：奥斯卡前还有那些新片"}
                    {"2017/09/07"}
                </Cover>
                <Cover className={styles.cover2} external="https://mp.weixin.qq.com/s/UF-gb4UWZxMUMISxrbekHQ">
                    {covers["20160904"]}
                    {"第41届TIFF：午夜疯狂单元详解"}
                    {"2016/09/04"}
                </Cover>
                <Cover className={styles.cover3} external="https://mp.weixin.qq.com/s/_eUFx2fMl52nr2uJNJW_0Q">
                    {covers["20160908"]}
                    {"第41届TIFF特别展映单元首批片单详解"}
                    {"2016/09/08"}
                </Cover>
            </div>

            {/* <Background/> */}
            <Row className={styles.footer}>
                <p>
                    © SINO<span className="italic">LUX</span> FILM 华光电影
                </p>
            </Row>

            <Footer>
                <a href="#2017">
                    YEAR-ROUND<br/>
                    COMMUNITY<br/>
                    EVENTS<br/>
                    全年观影团活动<br/>
                    <div className={styles.square}/>
                </a>
            </Footer>
        </Section>
    )
}

export default Events
