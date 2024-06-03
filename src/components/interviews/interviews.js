import React from "react"

import Section from "../layouts/section"
import Nav from "../layouts/navigation"
import Footer from "../footer/footer"
import Row from "../layouts/row"

import Articles from "./articles/table"

import * as styles from "./interviews.module.scss"


const Interviews = () => {
    return (
        <Section>
            <Nav className={styles.nav}>
                <p><a href="#2024" className="link-en">2024</a></p>
                <p><a href="#2023" className="link-en">2023</a></p>
                <p><a href="#2022" className="link-en">2022</a></p>
                <p><a href="#2021" className="link-en">2021</a></p>
                <p><a href="#2020" className="link-en">2020</a></p>
                <p><a href="#2019" className="link-en">2019</a></p>
                <p><a href="#2018" className="link-en">2018</a></p>
                <p><a href="#2017" className="link-en">2017</a></p>
            </Nav>


            {/* <Background/> */}
            <Articles/>

            <Row className={styles.footer}>
                <p>
                    © SINO<span className="italic">LUX</span> FILM 华光电影
                </p>
            </Row>

            <Footer>
                <a href="#2017">
                    NEWS &<br/>
                    INTERVIEWS<br/>
                    电影报道<br/>
                    <div className={styles.square}/>
                </a>
            </Footer>
        </Section>
    )
}

export default Interviews
