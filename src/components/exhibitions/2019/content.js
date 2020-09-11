import React from "react"

import Section from "../../layouts/section"
import Row from "../../layouts/row"
import Title, {Subtitle} from "../../layouts/title"

import River from "./films/river"
import Blind from "./films/blind"
import Mystery from "./films/mystery"
import Butterfly from "./films/butterfly"
import Sponsors from "./images/sponsors"

import styles from "./content.module.scss"

const Content = () => {
    return (
        <Section className={styles.rows + " fadein-fast"}>
            <div className={styles.row} id="2017">
                <Row><Title>Love & Bruises</Title><Subtitle>A Lou Ye<br/>Retrospective</Subtitle></Row>
                <div>
                    {/* {about.en} */}
                    <div className={styles.eventDetail}>
                        <p className={styles.when}>TIME: 2019/12/5 ⇨ 2019/12/6 - LOCATION: TIFF Bell Lightbox</p><br/><br/>
                        <p className={styles.where}>LOCATION: TIFF Bell Lightbox - TIME: 2019/12/5 ⇨ 2019/12/6</p>
                    </div>
                </div>

                <div className={styles.nav}>
                    <p>SCREENINGS<br/>展映片单</p>
                    <div className={styles.screenings}>
                        <p>
                            <a href="#river" className="link-en">SUZHOU RIVER</a><br/>
                            <a href="#river" className="link-zh">苏州河</a>
                        </p>
                        <p>
                            <a href="#blind" className="link-en">BLIND MASSAGE</a><br/>
                            <a href="#blind" className="link-zh">推拿</a>
                        </p>
                        <p>
                            <a href="#mystery" className="link-en">MYSTERY</a><br/>
                            <a href="#mystery" className="link-zh">浮城谜事</a>
                        </p>
                        <p>
                            <a href="#butterfly" className="link-en">PURPLE BUTTERFLY</a><br/>
                            <a href="#butterfly" className="link-zh">紫蝴蝶
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <River/>

            <Blind/>

            <Mystery/>

            <Butterfly/>

            <Sponsors/>

        </Section>
    )
}

export default Content
