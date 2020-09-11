import React from "react"

import Row from "../../../layouts/row"
import Col from "../../../layouts/col"
import {Subtitle} from "../../../layouts/title"

import Blind0 from "../images/blind0"
import Blind1 from "../images/blind1"

import styles from "../content.module.scss"

const imgStyles = [{
    position: "absolute",
    top: "20%",
    left: "75%",
    width: "350px",
    height: "auto",
    zIndex: "0"
}, {
    position: "absolute",
    top: "65%",
    left: "75%",
    width: "350px",
    height: "auto",
    zIndex: "0"
}]

const Blind = () => {
    return (
        <div className={styles.row} id="blind">
            <Row>
                <div className={styles.square2}></div>
            </Row>
            <Row>
                <Subtitle>BLIND MASSAGE 推拿 <span className="italic">(2014)</span></Subtitle>
            </Row>
            <div className={styles.content}>
                <Col className={styles.col}>
                    <p>LOU YE / 娄烨</p>
                    <p className={styles.detail}>1 hr 55 min | Drama | China, France | Mandarin</p>
                    <p>
                        A drama centered on the employees of a Nanjing massage parlor who share a common trait: 
                        they are all blind.
                    </p>
                    <p>
                        少年时代的一场意外让男孩小马（黄轩 饰）的双眼失去了光明，自杀未遂后，阴沉的小马辗转来到了由沙复明（秦昊 饰）
                        所经营的盲人按摩中心就职。在这里，聚集了许多和小马一样的盲人，无论是先天还是后天，生活在共同的黑暗里让这群盲人之间产生了深厚而坚实的友谊。
                    </p>
                    <p>
                        王大夫（郭晓冬 饰）和女友小孔（张磊 饰）远道而来投奔沙复明，小孔充满了女人味的声音和气息令小马的内心产生了涟漪，
                        执着而决绝的小马追寻着内心的声音，不断的向小孔靠近着。之后，一个名叫小蛮（黄璐 饰）的发廊小姐出现在了小马的生命里，
                        随着时间的推移，小马竟然开始对小蛮产生了感情。
                    </p>
                </Col>
                <Blind0 style={imgStyles[0]}/>
                <Blind1 style={imgStyles[1]}/>
            </div>
        </div>
    )
}

export default Blind
