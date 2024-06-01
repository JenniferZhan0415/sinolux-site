import React from "react"

import Section from "../layouts/section"
import Nav from "../layouts/navigation"
import Footer from "../footer/footer"
import Row from "../layouts/row"

import Articles from "./articals/table"

import styles from "./review.module.scss"


const Reviews = () => {
    return (
        <Section>
            <Nav className={styles.nav}>
                <p><a href="#2022" className="link-en">2020</a></p>
                <p><a href="#2021" className="link-en">2020</a></p>
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
                    REVIEWS<br/>
                    电影评论<br/>
                </a>
            </Footer>
        </Section>
    )
}

export default Reviews
