import React from "react"

import Row from "../../../layouts/row"
import Col from "../../../layouts/col"
import {Subtitle} from "../../../layouts/title"

import Free from "../images/free"
import Free2 from "../images/free2"

import styles from "../content.module.scss"

const imgStyles = [{
    position: "absolute",
    top: "5%",
    left: "75%",
    width: "370px",
    height: "auto",
    zIndex: "0"
}, {
    position: "absolute",
    top: "60%",
    left: "75%",
    width: "370px",
    height: "auto",
    zIndex: "0"
}]

const FreeEasy = () => {
    return (
        <div className={styles.row} id="free-easy">
            <Row>
                <div className={styles.square3}></div>
            </Row>
            <Row>
                <Subtitle>FREE AND EASY 轻松 + 愉快 <span className="italic">(2017)</span></Subtitle>
            </Row>
            <div className={styles.content}>
                <Col className={styles.col}>
                    <p>GENG JUN / 耿军</p>
                    <p className={styles.detail}>1 hr 39 min | Comedy | China | Mandarin</p>
                    <p>
                        Under a tin-gray sky, in a hollowed out corner of northern China, 
                        a stranger arrives in town bearing magical soap—but smelling it will cost you. 
                        Nearby, a pair of unenthused cops try cracking a seemingly simple case. Or not. 
                        And you can forget religious solace; the only monk around is not what he seems.
                    </p>
                    <p>
                    电影里汇聚了忙碌破案的警察，忙碌骗钱的骗子，忙碌抓偷树贼的护林员，忙碌找妈妈的基督徒，忙碌搞团结的假和尚, 
                    一群忙碌的人演绎后退的故事。这是一个关于罪的常态化，在追寻中坐以待毙的故事，一个悲伤的喜剧电影。
                    电影里充满着北方的幽默，一波三折的冲突，虎视眈眈的壮美山河。
                    </p>
                </Col>
                <Free style={imgStyles[0]}/>
                <Free2 style={imgStyles[1]}/>
            </div>
        </div>
    )
}

export default FreeEasy
