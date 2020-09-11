import React from "react"

import Row from "../../../layouts/row"
import Col from "../../../layouts/col"
import {Subtitle} from "../../../layouts/title"

import Rouge0 from "../images/rouge0"
import Rouge1 from "../images/rouge1"

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
    top: "65%",
    left: "75%",
    width: "350px",
    height: "auto",
    zIndex: "0"
}, {
    position: "absolute",
    top: "70%",
    left: "75%",
    width: "350px",
    height: "auto",
    zIndex: "0"
}]

const Ash = () => {
    return (
        <div className={styles.row} id="rouge">
            <Row>
                <div className={styles.square1}></div>
            </Row>
            <Row>
                <Subtitle>ROUGE 胭脂扣 <span className="italic">(1987)</span></Subtitle>
            </Row>
            <div className={styles.content}>
                <Col className={styles.col}>
                    <p>Stanley Kwan / 关景鹏</p>
                    <p className={styles.detail}>1 hr 39 min | Romance | Hong Kong | Cantonese</p>
                    <p>
                        The ghost of a courtesan who died in 1934 returns to Hong Kong fifty-three years later, seeking to reunite with the man she loved.
                    </p>
                    <p>
                        报社记者袁永定（万梓良 饰）遇到了一位前来登寻人广告的女子如花（梅艳芳 饰），无意中才发现了该名冷艳的女子原是鬼魂，早在50年前，她是一名红牌妓女，结识了一名纨绔子弟十二少陈振邦（张国荣 饰）。如花深深爱上了这名多情的公子，两人已到了谈婚论嫁的地步，由于身份悬殊，遭到了十二少家人的极力反对。无奈之下，他们以胭脂扣定情，一起吞鸦片殉情。如花未能在地府看到自己的爱人，便到阳间寻找。
                        如花在两名记者的帮助下，得知原来当年十二少被人救活了，如今生活潦倒。面对十二少的懦弱，如花伤心欲绝，把胭脂扣返还，回到阴间投胎转世。
                    </p>
                </Col>
                <Rouge0 style={imgStyles[0]}/>
                <Rouge1 style={imgStyles[1]}/>
            </div>
        </div>
    )
}

export default Ash
