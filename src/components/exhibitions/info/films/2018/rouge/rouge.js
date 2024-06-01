import React from "react"

import {Subsubtitle} from "../../../../../layouts/title"

import Gallery from "./gallery"
import * as styles from "../../films.module.scss"

const imgWrapper = {
    marginTop: "1em",
    marginRight: "30%",
    width: "12vw",
    border: "2px solid black",
    overflow: "hidden"
}

const Rouge = () => {
    return (
        <div className={styles.container}>
            <div>
                <br/>
                <p className={styles.section}>
                    <Subsubtitle>Rouge</Subsubtitle>
                    Y: 1987<br/>
                    D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm0477102/">Stanley Kwan</a>
                </p>
                <p className={styles.section}>
                    <span className="bold">Watch / Ticket</span><br/>
                    TIFF Bell Lightbox<br/>
                </p>
                <p className={styles.section}>
                    <span className="bold">Details</span><br/>
                    <div className={styles.detail}>
                        <div>
                            <span className="grey">Catogory</span><br/>
                            <span>Feature</span>
                        </div>
                        <div>
                            <span className="grey">Length</span><br/>
                            <span>96 min</span>
                        </div>
                        <div>
                            <span className="grey">Genre</span><br/>
                            <span>Drama / Romance</span>
                        </div>
                        <div>
                            <span className="grey">Region</span><br/>
                            <span>Hong Kong</span>
                        </div>
                        <div>
                            <span className="grey">Language</span><br/>
                            <span>Cantonese</span>
                        </div>
                        <div>
                            <span className="grey">Color</span><br/>
                            <span>Color</span>
                        </div>
                        <div>
                            <span className="grey">Aspect Ratio</span><br/>
                            <span>1.85:1</span>
                        </div>
                    </div>
                </p>
                <p className={styles.section}>
                    <span className="bold">Summary</span><br/>
                    Fleur is the blue angel in one of Hong Kong's "flower houses" - bordellos and night clubs of the 1930's. A detached and beautiful performer, she falls in love with Twelfth Master Chan, heir to a chain of pharmacies. They agree to a suicide pact. Jump ahead 50 years to modern Hong Kong: Fleur's ghost appears in Yuen's newspaper office, wanting to place an ad to find Chan, who never arrived in the afterlife. Yuen, and his equally bewildered girl friend, An Chor, are captivated by Fleur and her story.
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/rouge/">&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt0093258/">&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/1299288//">&rarr; DOUBAN</a></span><br/>
                </p>
            </div>
            <div>
                <br/>
                <span className="bold">Gallery</span>
                <div style={imgWrapper}>
                    <Gallery/>
                </div>
            </div>
        </div>
    )
}

export default Rouge
