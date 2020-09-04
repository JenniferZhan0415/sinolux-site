import React from "react"

import Row from "../../../layouts/row"
import Col from "../../../layouts/col"
import {Subtitle} from "../../../layouts/title"

import Summer from "../images/summer"

import styles from "../content.module.scss"

const imgStyles = [{
    position: "absolute",
    top: "15%",
    left: "75%",
    width: "370px",
    height: "auto",
    zIndex: "0"
}]

const SummerGone = () => {
    return (
        <div className={styles.row} id="summer">
            <Row>
                <div className={styles.square4}></div>
            </Row>
            <Row>
                <Subtitle>THE SUMMER IS GONE 八月 <span className="italic">(2016)</span></Subtitle>
            </Row>
            <div className={styles.content}>
                <Col className={styles.col}>
                    <p>ZHANG DALEI / 张大磊</p>
                    <p className={styles.detail}>1 hr 46 min | Drama | China | Mandarin</p>
                    <p>
                        In the early 1990s, Xiaolei, who lives in a small village in western China, 
                        longs for a summer holiday without homework after he graduated from primary school. 
                        However, it is filled with boring routine, and Xiaolei feels the anxiety around him. 
                        When his father has left, Xiaolei realises that his life is completely changed.
                    </p>
                    <p>
                        九十年代初的西部小城，结束了小升初考试的张小雷（孔惟一 饰）终于迎来了盼望已久的没有作业的暑假。
                        然而这个自由的，炎热的夏天并不是想象中那样红火热烈，更多是平常反复的家庭生活和大把闲工夫。
                        恰逢那一年国家开始实施国有单位转型，铁饭碗被打破，张小雷父亲（张晨 饰）的单位也受到改革冲击，
                        他们生活的家属院 里每一个家庭的生活都被改革影响着。孩子们整日百无聊赖，而看似平静的大人们，
                        心却像烈日炙烤着那般燥热。张小雷就那么静静的耗着，感受着身边隐隐发生的一切。
                    </p>
                </Col>
                <Summer style={imgStyles[0]}/>
            </div>
        </div>
    )
}

export default SummerGone
