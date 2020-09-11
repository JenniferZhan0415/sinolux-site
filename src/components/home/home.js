import React from "react"
import {Link} from "gatsby"

import Background from "./background/background"
import Exhibition from "./exhibition"
import Event from "./event"
import Interview from "./interview"
import Footer from "../footer/footer"
import Section from "../layouts/section"

import styles from "./home.module.css"

const Home = () => {
    return <div className={styles.home}>
        <Background/>
        

        <Section>
            <Exhibition/>
            <Event/>
            <Interview/>
        </Section>

        <Footer>
            <a href="https://tiff.net">TICKETS<br/>票</a>
            <Link to="/about-us">ABOUT US<br/>关于我们</Link>
        </Footer>
    </div>
}

export default Home
