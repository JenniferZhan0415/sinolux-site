import React from "react"
import {Link} from "gatsby"

import Background from "./background/background"
import Exhibition from "./exhibition/exhibition"
import Event from "./event/event"
import Interview from "./interview/interview"
import Footer from "../footer/footer"
import Section from "../layouts/section"
import ScrollAbsIndicator from "../transforms/scrollAbs/scrollAbs"

import styles from "./home.module.scss"

const Home = () => {
    return (
        <div className={styles.home}>
            <Background/>

            <ScrollAbsIndicator>
                <Section>
                    <Exhibition/>
                    <Event/>
                    <Interview/>
                </Section>
            </ScrollAbsIndicator>

            <Footer>
                <a href="https://tiff.net">TICKETS<br/>票</a>
                <Link to="/about-us">ABOUT US<br/>关于我们</Link>
            </Footer>

            <div className={styles.footer}>
                <Link to="/about-us">© SINO<span className="italic">LUX</span> FILM, 2020<br/></Link>
            </div>
        </div>
    )
}

export default Home
