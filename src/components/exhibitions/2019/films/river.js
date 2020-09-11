import React from "react"

import Row from "../../../layouts/row"
import Col from "../../../layouts/col"
import {Subtitle} from "../../../layouts/title"

import River0 from "../images/river0"
import River1 from "../images/river1"

import styles from "../content.module.scss"

const imgStyles = [{
    position: "absolute",
    top: "10%",
    left: "75%",
    width: "350px",
    height: "auto",
    zIndex: "0"
}, {
    position: "absolute",
    top: "60%",
    left: "75%",
    width: "350px",
    height: "auto",
    zIndex: "0"
}]

const River = () => {
    return (
        <div className={styles.row} id="river">
            <Row>
                <div className={styles.square1}></div>
            </Row>
            <Row>
                <Subtitle>SUZHOU RIVER 苏州河 <span className="italic">(2000)</span></Subtitle>
            </Row>
            <div className={styles.content}>
                <Col className={styles.col}>
                    <p>LOU YE / 娄烨</p>
                    <p className={styles.detail}>1 hr 23 min | Drama | China, German | Mandarin</p>
                    <p>
                        A tragic love story set in contemporary Shanghai. The film stars Zhou Xun in a dual role 
                        as two different women and Jia Hongsheng as a man obsessed with finding a woman 
                        from his past.
                    </p>
                    <p>
                        上海苏州河上，用摩托车替人送货的马达（贾宏声）接下送接纯真少女牡丹（周迅）的活，两人相处时，牡丹爱上马达，
                        但就在她决定把终身托付给对方时，马达财迷心窍联合黑道朋友绑架了她，令牡丹心灰意冷跳进苏州河里。
                        临跳前，牡丹丢下会变成美人鱼再寻马达的话。
                    </p>
                    <p>
                        五年后，为自己行为懊悔不迭的马达疑惑牡丹又回来了，开始四处找寻。当在某酒吧里看到扮美人鱼表演的美美（周迅）时，
                        马达认定她就是牡丹，然而美美不过是另一个痴情女子而已。
                    </p>
                </Col>
                <River0 style={imgStyles[0]}/>
                <River1 style={imgStyles[1]}/>
            </div>
        </div>
    )
}

export default River
