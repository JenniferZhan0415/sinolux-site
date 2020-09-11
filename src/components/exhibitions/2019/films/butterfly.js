import React from "react"

import Row from "../../../layouts/row"
import Col from "../../../layouts/col"
import {Subtitle} from "../../../layouts/title"

import Butterfly0 from "../images/butterfly0"
import Butterfly1 from "../images/butterfly1"

import styles from "../content.module.scss"

const imgStyles = [{
    position: "absolute",
    top: "15%",
    left: "75%",
    width: "350px",
    height: "auto",
    zIndex: "0"
}, {
    position: "absolute",
    top: "50%",
    left: "75%",
    width: "350px",
    height: "auto",
    zIndex: "0"
}]

const Butterfly = () => {
    return (
        <div className={styles.row} id="butterfly">
            <Row>
                <div className={styles.square4}></div>
            </Row>
            <Row>
                <Subtitle>PURPLE BUTTERFLY 紫蝴蝶 <span className="italic">(2003)</span></Subtitle>
            </Row>
            <div className={styles.content}>
                <Col className={styles.col}>
                    <p>LOU YE / 娄烨</p>
                    <p className={styles.detail}>2 hr 8 min | Drama, Histroy | China, France | Mandarin</p>
                    <p>
                        Ding Hui is a member of Purple Butterfly, a powerful resistance group in Japanese occupied Shanghai. 
                        An unexpected encounter reunites her with Itami, an ex-lover… and officer with 
                        a secret police unit tasked with dismantling Purple Butterfly.
                    </p>
                    <p>
                        1928年，伪满洲国的日本翻译伊丹英彦（仲村亨）离开中国情人丁慧（章子怡）返回日本，数年后他再回中国来到上海时，
                        变身高级特务。而此时丁慧已成为地下抗日组织的成员，并与该组织首领谢明（冯远征）相爱。抗日组织去火车站接从外地
                        聘请的暗杀日本情报人员山本的杀手时，误认其为小职员司徒（刘烨），混乱中，丁慧杀死司徒女友依玲（李冰冰），司徒则被伊丹英彦抓获。
    　　            </p>
                    <p>
                        对一系列遭遇无比迷惑的司徒被释放后，发誓要为依玲报仇。丁慧与伊丹英彦重逢，成为两股势力互相设局要利用的重要棋子，
                        她本人正为误杀无辜饱受内心折磨。某个日本会所举办的舞会上，伊丹英彦告诉丁慧山本与谢明均已死，丁慧震惊想刺杀伊丹英彦之际，
                        司徒持枪闯进舞会。
                    </p>
                </Col>
                <Butterfly0 style={imgStyles[0]}/>
                <Butterfly1 style={imgStyles[1]}/>
            </div>
        </div>
    )
}

export default Butterfly
