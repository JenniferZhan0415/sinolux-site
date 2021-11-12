import React, { Component } from "react"
import {Link} from "gatsby"

// import Background from "./background/background"
import Exhibition from "./exhibition/exhibition"
import Event from "./event/event"
import Interview from "./interview/interview"
import Review from "./review/review"
import About from "./about/about"
import Ticket from "./ticket/ticket"
import Footer from "../footer/footer"
import Cover from "./cover/cover"

import styles from "./home.module.scss"

class Home extends Component {
    constructor(props) {
        super(props)

        this.setDefault = this.setDefault.bind(this)
        this.unsetDefault = this.unsetDefault.bind(this)

        this.state = {
            default: true
        }
    }

    setDefault() {
        this.setState({
            default: true
        })
    }

    unsetDefault() {
        this.setState({
            default: false
        })
    }

    render() {
        let cover

        if (this.state.default) {
            cover = <Cover/>
        } else {
            cover = null
        }

        return (
            <div className={styles.home}>
                {cover}

                <Footer>
                    <Exhibition setDefault={this.setDefault} unsetDefault={this.unsetDefault}/>
                    <Event setDefault={this.setDefault} unsetDefault={this.unsetDefault}/>
                    <Interview setDefault={this.setDefault} unsetDefault={this.unsetDefault}/>
                    <Review setDefault={this.setDefault} unsetDefault={this.unsetDefault}/>
                    <Ticket setDefault={this.setDefault} unsetDefault={this.unsetDefault}/>
                    <About setDefault={this.setDefault} unsetDefault={this.unsetDefault}/>
                </Footer>
    
                <div className={styles.footer}>
                    <span className={styles.footerSpan + " subtitle"}>© <Link to="/about-us">SINOLUX FILM<br/></Link>, 2021</span>
                </div>
            </div>
        )
    }
}

export default Home
