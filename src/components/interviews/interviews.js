import React from "react"

import Section from "../layouts/section"
import Nav from "../layouts/navigation"
import Footer from "../footer/footer"

import Articales from "./articals/table"
import Background from "./background"

import styles from "./interviews.module.scss"


const Interviews = () => {
    return (
        <Section>
            <Nav className={styles.nav}>
                <p><a href="#2020" className="link-en">2020</a></p>
                <p><a href="#2019" className="link-en">2019</a></p>
                <p><a href="#2018" className="link-en">2018</a></p>
                <p><a href="#2017" className="link-en">2017</a></p>
            </Nav>


            {/* <Background/> */}
            <Articales/>

            <Footer>
                <a href="#2017">
                    NEWS &<br/>
                    INTERVIEWS<br/>
                    REVIEWS<br/>
                    电影报道 + 评论<br/>
                    <div className={styles.square}/>
                </a>
            </Footer>
        </Section>
    )
}

export default Interviews
