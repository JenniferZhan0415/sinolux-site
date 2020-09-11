import React from "react"

import Row from "../../../layouts/row"
import Col from "../../../layouts/col"
import {Subtitle} from "../../../layouts/title"

import Farewell0 from "../images/farewell"

import styles from "../content.module.scss"

const imgStyles = [{
    position: "absolute",
    top: "25%",
    left: "77%",
    width: "300px",
    height: "auto",
    zIndex: "0"
}, {
    position: "absolute",
    top: "50%",
    left: "75%",
    width: "200px",
    height: "auto",
    zIndex: "0"
}]

const Farewell = () => {
    return (
        <div className={styles.row} id="farewell">
            <Row>
                <div className={styles.square2}></div>
            </Row>
            <Row>
                <Subtitle>FAREWELL MY CONCUBINE 霸王别姬 <span className="italic">(1993)</span></Subtitle>
            </Row>
            <div className={styles.content}>
                <Col className={styles.col}>
                    <p>CHEN KAIGE / 陈凯歌</p>
                    <p className={styles.detail}>2 hr 51 min | Drama, LGBT | China | Mandarin</p>
                    <p>
                        Abandoned by his prostitute mother in 1920, Douzi was raised by a theater troupe. 
                        There he meets Shitou and over the following years the two develop an act entitled 
                        “Farewell My Concubine” that brings them fame and fortune. When Shitou marries Juxian, 
                        Doutzi becomes jealous, the beginnings of the acting duo’s explosive breakup and 
                        tragic fall take root.
                    </p>
                    <p>
                    段小楼（张丰毅）与程蝶衣（张国荣）是一对打小一起长大的师兄弟，两人一个演生，一个饰旦，一向配合天衣无缝，
                    尤其一出《霸王别姬》，更是誉满京城，为此，两人约定合演一辈子《霸王别姬》。但两人对戏剧与人生关系的理解有本质不同，
                    段小楼深知戏非人生，程蝶衣则是人戏不分。<br/>
                    段小楼在认为该成家立业之时迎娶了名妓菊仙（巩俐），致使程蝶衣认定菊仙是可耻的第三者，使段小楼做了叛徒，
                    自此，三人围绕一出《霸王别姬》生出的爱恨情仇战开始随着时代风云的变迁不断升级，终酿成悲剧。
                    </p>
                </Col>
                <Farewell0 style={imgStyles[0]}/>
            </div>
        </div>
    )
}

export default Farewell
