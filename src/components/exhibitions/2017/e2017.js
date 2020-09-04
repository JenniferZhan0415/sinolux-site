import React from "react"
import { Link } from "gatsby"

import {Subtitle} from "../../layouts/title"
import Section from "../../layouts/section"
import Nav from "../../layouts/navigation"
import Content from "./content"
import Background from "../background"

import styles from "./e2017.module.scss"

const linkStyle = {
    textDecoration: "none"
}

const E2017 = () => {
    return (
        <Section>
            <div className={styles.title}>
                <Subtitle>
                    <a href="#2017" style={linkStyle}>
                        2017<br/>
                        BLUE<br/>
                        蓝<br/>
                        <div className={styles.square}/>
                    </a>
                </Subtitle>
                {/* <Subtitle><a href="#2017" style={linkStyle}>2017</a></Subtitle>
                <Subtitle><a href="#2017" style={linkStyle}>BLUE</a></Subtitle>
                <Subtitle><a href="#2017" style={linkStyle}>蓝</a></Subtitle>
                <Subtitle className={styles.square}></Subtitle> */}
            </div>

            <Nav className={styles.nav}>
                <p>SCREENINGS<br/>展映片单</p>
                <p>
                    <a href="#cross-current" className="link-en">CROSSCURRENT</a><br/>
                    <a href="#cross-current" className="link-zh">长江图</a>
                </p>
                <p>
                    <a href="#blue-gate" className="link-en">BLUE GATE CROSSING</a><br/>
                    <a href="#blue-gate" className="link-zh">蓝色大门</a>
                </p>
                <p>
                    <a href="#free-easy" className="link-en">FREE AND EASY</a><br/>
                    <a href="#free-easy" className="link-zh">轻松 + 愉快</a>
                </p>
                <p>
                    <a href="#summer" className="link-en">THE SUMMER IS GONE</a><br/>
                    <a href="#summer" className="link-zh">八月</a>
                </p>
            </Nav>

            <Content/>
            {/* <Background/> */}
        </Section>
    )
}

export default E2017
