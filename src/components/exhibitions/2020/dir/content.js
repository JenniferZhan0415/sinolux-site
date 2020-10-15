import React from "react"

import styles from "./content.module.scss"
import Poster from "../images/my-prince-edward"

const ContentDir = (props) => {
    return (
        <div className={styles.content}>
            <div className={styles.title}>
                <a href="https://letterboxd.com/film/my-prince-edward/">金都 My Prince Edward</a>
                &nbsp;(2019)
            </div>
            <div>
                <a className={styles.link1} href="https://www.imdb.com/name/nm3925655/">Norris Wong</a>, Hong Kong
            </div>
            <div className={styles.details}>
                1 hr 31 min, Cantonese, Color
            </div>
            <div>Time: 20.11.07 — 20.11.08</div>
            <div>Location: Online via <a className={styles.link1} href="https://vimeo.com/ondemand/mpesinolux">Vimeo</a></div>

            <div className={styles.ticket}>
                <a className={styles.link2} href="https://vimeo.com/ondemand/mpesinolux">Get Your Ticket Today</a>
            </div>

            <div className={styles.slide}>
                <Poster/>
            </div>

            <p className={styles.description}>
                Serving countless newlyweds in Hong Kong’s go-to one-stop-shop of cheap wedding supplies doesn’t exempt <em>Fong</em> from social pressure to marry. Since nodding to <em>Edward’s</em> proposal, she has been pushed beyond limits by unaffordable housing, archaic customs, and intrusive in-laws.
            </p>

            <p className={styles.description}>
                What befuddles her further is the reappearance of Shuwei, a mainlander she’s supposed to be divorced from out of a scam marriage that solved her coming-of-age hardship.
            </p>

            <p className={styles.description}>
                Zeroing in on nuts and bolts of modern marriage, <em>My Prince Edward</em> pokes around fixated correlations of freedom with relationship status and geographic residence. Like a breath of fresh air out of the breathless space it navigates, the whimsical gem contributes a rare humane take on the worldly metropolis’s divisions with humor and wisdom.
            </p>

            <div className={styles.footer}/>
        </div>
    )
}

export default ContentDir
