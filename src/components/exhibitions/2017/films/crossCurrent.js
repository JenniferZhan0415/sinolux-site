import React from "react"

import Row from "../../../layouts/row"
import Col from "../../../layouts/col"
import {Subtitle} from "../../../layouts/title"

import Current1 from "../images/current1"
import Current2 from "../images/current2"
import Current3 from "../images/current3"

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
    top: "42%",
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

const CrossCurrent = () => {
    return (
        <div className={styles.row} id="cross-current">
            <Row>
                <div className={styles.square1}></div>
            </Row>
            <Row>
                <Subtitle>CROSSCURRENT 长江图 <span className="italic">(2016)</span></Subtitle>
            </Row>
            <div className={styles.content}>
                <Col className={styles.col}>
                    <p>YANG CHAO / 杨超</p>
                    <p className={styles.detail}>1 hr 56 min | Drama | China, France | Mandarin</p>
                    <p>
                        Mysterious, sublime and elegiac, director Yang Chao’s odyssey blends breathtaking images with fantasy, 
                        poetry and history to create a complex magical universe. From the Shanghai metropolis to the snow-capped 
                        Tibet mountain, Gao Chun steers his cargo up the Yangtze, a river that has nurtured a centuries-old civilization. 
                        He comes across An Lu, a beautiful woman who appears in a different identity at every port recorded by a poetry book. 
                        Longing for her company, he realizes she gradually turns younger as he journeys upstream. He starts to wonder 
                        whether An Lu is supernatural or he is traveling not only in space but also in time. 
                        After passing a pagoda that reverberates Buddha’s voice, a flooded town reappeared elsewhere, the grandiose Three Gorges Dam 
                        and many other places where lives have been transformed, he finally arrives at the start of the Yangtze, 
                        where he unveils the secret of his past and An Lu.
                    </p>
                </Col>
                <Current1 style={imgStyles[0]}/>
                <Current2 style={imgStyles[1]}/>
                <Current3 style={imgStyles[2]}/>
            </div>
        </div>
    )
}

export default CrossCurrent
