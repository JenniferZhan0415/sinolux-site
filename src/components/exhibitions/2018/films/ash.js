import React from "react"

import Row from "../../../layouts/row"
import Col from "../../../layouts/col"
import {Subtitle} from "../../../layouts/title"

import Ash0 from "../images/ash0"
import Ash1 from "../images/ash1"
import Ash2 from "../images/ash2"

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
    top: "40%",
    left: "75%",
    width: "370px",
    height: "auto",
    zIndex: "0"
}, {
    position: "absolute",
    top: "75%",
    left: "75%",
    width: "370px",
    height: "auto",
    zIndex: "0"
}]

const FreeEasy = () => {
    return (
        <div className={styles.row} id="ash">
            <Row>
                <div className={styles.square3}></div>
            </Row>
            <Row>
                <Subtitle>ASHES OF TIME 东邪西毒 <span className="italic">(1994)</span></Subtitle>
            </Row>
            <div className={styles.content}>
                <Col className={styles.col}>
                    <p>WONG KAR-WAI / 王家卫</p>
                    <p className={styles.detail}>1 hr 33 min | Drame | Hong Kong | Cantonese</p>
                    <p>
                        Ouyang Feng is a heartbroken and cynical man who spends his days in the desert, 
                        connecting expert swordsmen with those seeking revenge and willing to pay for it. 
                        Throughout five seasons in exile, Ouyang spins tales of his clients’ unrequited loves and 
                        unusual acts of bravery.    
                    </p>
                    <p>
                        取材于金庸的武侠神作《射雕英雄传》，但故事的主线变成了原著中不受人待见的欧阳锋（张国荣 饰）。
                        欧阳锋因为昔日恋人（张曼玉 饰）赌气嫁给兄长而离开家乡白驼山，来到大漠中开了一家专门介绍杀手的酒舍。
                        在沙漠的自我放逐中他重逢了好友黄药师（梁家辉 饰），遇见了精分的慕容嫣（林青霞 饰），深情的想念妻子桃花（刘嘉玲 饰）
                        却不想相见的夕阳武士（梁朝伟 饰），倔强的复仇孤女（杨采妮 饰），初来闯荡江湖的不穿鞋的洪七（张学友 饰）。
                        在经历了他人的生死、感情纠葛之后，欧阳锋得知了恋人的死讯，一切得到释然后他烧毁了酒舍，离开了沙漠……
                    </p>
                </Col>
                <Ash0 style={imgStyles[0]}/>
                <Ash1 style={imgStyles[1]}/>
                <Ash2 style={imgStyles[2]}/>
            </div>
        </div>    
    )
}

export default FreeEasy
