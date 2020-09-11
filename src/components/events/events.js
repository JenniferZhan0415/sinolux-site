import React from "react"

import Section from "../layouts/section"
import Row from "../layouts/row"
import Nav from "../layouts/navigation"
import Footer from "../footer/footer"

import Cover from "../layouts/cover"
import {covers} from "./articals/covers"

import Background from "./background"

import styles from "./events.module.scss"


const Events = () => {
    return (
        <Section>
            <Nav className={styles.nav}>
                <p><a href="#2020" className="link-en">2020</a></p>
                <p><a href="#2019" className="link-en">2019</a></p>
                <p><a href="#2018" className="link-en">2018</a></p>
                <p><a href="#2017" className="link-en">2017</a></p>
            </Nav>

            <div className={styles.rows}>
                <Row className={styles.row} id="2019">
                    {/* <Cover className={styles.cover0} to="/events/tiff-picture-palace/"> */}
                    <Cover className={styles.cover0} external="https://mp.weixin.qq.com/s/kp-iDjcJ7EhXkv6OHrl_rQ">
                        {covers["190603"]}
                        {"TIFF Picture Palace"}
                        {"2019/06/03"}
                    </Cover>
                </Row>
                <Row className={styles.row}>
                    <Cover className={styles.cover1} external="https://mp.weixin.qq.com/s/I3RhrqFQEWa7PYRJD_rgWg">
                        {covers["190418"]}
                        <span>《地球最后的夜晚》首映之夜</span>
                        {"2019/04/18"}
                    </Cover>

                    <Cover className={styles.cover2} external="https://mp.weixin.qq.com/s/_SsCEOUovCOtzIJknMs3CQ">
                        {covers["190323"]}
                        {"AGO 《火车进站》&《工厂大门》"}
                        {"2019/03/23"}
                    </Cover>
                </Row>

                <Row className={styles.row}>
                    <Cover className={styles.cover3} external="https://mp.weixin.qq.com/s/rZXH51Zje7uByxy9zF4BeQ">
                        {covers["190308"]}
                        {"《大象席地而坐》新片放映"}
                        {"2019/03/08"}
                    </Cover>
                </Row>

                <Row className={styles.row} id="2018">
                    <Cover className={styles.cover4} external="https://mp.weixin.qq.com/s/rZXH51Zje7uByxy9zF4BeQ">
                        {covers["180718"]}
                        {"《豹》/ 维斯康蒂回顾展"}
                        {"2018/07/18"}
                    </Cover>
                </Row>
                <Row className={styles.row}></Row>
            </div>

            {/* <Background/> */}

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
