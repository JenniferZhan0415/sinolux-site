import React from "react"

import Row from "../../../layouts/row"
import Col from "../../../layouts/col"
import {Subtitle} from "../../../layouts/title"

import Blue1 from "../images/blue1"

import styles from "../content.module.scss"

const imgStyles = [{
    position: "absolute",
    top: "15%",
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

const BlueGate = () => {
    return (
        <div className={styles.row} id="blue-gate">
            <Row>
                <div className={styles.square2}></div>
            </Row>
            <Row>
                <Subtitle>BLUE GATE CROSS 蓝色大门 <span className="italic">(2002)</span></Subtitle>
            </Row>
            <div className={styles.content}>
                <Col className={styles.col}>
                    <p>YI ZHIYAN / 易智言</p>
                    <p className={styles.detail}>1 hr 25 min | Drama | Taiwan, France | Mandarin</p>
                    <p>
                        An is-she-or-isn't-she gay comedy focused on a Taiwanese teen, 
                        the boy she might like, and the girl she may love.
                    </p>
                    <p>
                        高中生孟克柔（桂纶镁 饰）与林月珍（梁淑慧饰）是无话不谈的好友，月珍告诉克柔，
                        说自己喜欢上了一个叫张士豪（陈柏霖 饰）的男生，便常常要求克柔帮她接近张士豪，
                        帮忙认识他、帮忙传递情书。没想到张士豪以为喜欢自己的是孟克柔，所以也常常借故接近她，
                        跟她在一起。传递情书的事，被张贴出来，原来林月珍是以孟克柔的名义给张士豪写信，
                        孟克柔非常生气而从而跟林月珍的关系疏远了。
                        另一边厢孟克柔极不愿意承认她与张士豪之间是恋人的关系，
                        可是张士豪已深深喜欢上她。孟克柔想跟男生接吻，因为她想清楚一件事，原来她心里，
                        喜欢的是另外一个人。
                    </p>
                </Col>
                <Blue1 style={imgStyles[0]}/>
            </div>
        </div>
    )
}

export default BlueGate
