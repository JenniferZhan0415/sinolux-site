import React from "react"

import Row from "../../../layouts/row"
import Col from "../../../layouts/col"
import {Subtitle} from "../../../layouts/title"

import Mystery0 from "../images/mystery0"
import Mystery1 from "../images/mystery1"

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

const Mystery = () => {
    return (
        <div className={styles.row} id="mystery">
            <Row>
                <div className={styles.square3}></div>
            </Row>
            <Row>
                <Subtitle>MYSTERY 浮城谜事 <span className="italic">(2012)</span></Subtitle>
            </Row>
            <div className={styles.content}>
                <Col className={styles.col}>
                    <p>LOU YE / 娄烨</p>
                    <p className={styles.detail}>1 hr 38 min | Drama, Crime | China, France | Mandarin</p>
                    <p>
                        A car full of irresponsible youths hit a woman on a rainy freeway and think 
                        she is trying an insurance scam.
                    </p>
                    <p>
                        警察童明松（祖锋 饰）负责调查一起车祸，大学生蚊子（常方源 饰） 意外惨死，童明松决定同哥们儿——喜欢蚊子的修车工秦枫
                        （朱亚文 饰）一起调查事件真相。两人追查真相时牵扯出了中产阶级夫妻乔永照（秦昊 饰）和陆洁（郝蕾 饰），
                        陆洁因为女儿在幼儿园的玩伴宇航，认识了她的妈妈桑琪（齐溪 饰），却在与其交往的过程中发现了丈夫的外遇…… 
                        随着蛛丝马迹的层层披露，事情越来越蹊跷，童、秦二人发现乔永照、陆洁、桑琪都藏有不可告人的秘密。
                    </p>
                </Col>
                <Mystery0 style={imgStyles[0]}/>
                <Mystery1 style={imgStyles[1]}/>
            </div>
        </div>
    )
}

export default Mystery
