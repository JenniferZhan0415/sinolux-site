import React from "react"

import Background from "./background/background"
import Exhibition from "./exhibition"
import Event from "./event"
import Interview from "./interview"

import styles from "./home.module.css"

const Home = () => {
    return <div className={styles.home}>
        <Background/>
        
        <Exhibition/>
        <Event/>
        <Interview/>
    </div>
}

export default Home
