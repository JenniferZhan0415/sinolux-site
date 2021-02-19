import React from "react"

import {Subsubtitle} from "../../../../layouts/title"

import Gallery from "./gallery"
import styles from "../films.module.scss"

const imgWrapper = {
    marginTop: "1em",
    marginRight: "30%",
    width: "12vw",
    border: "2px solid black",
    overflow: "hidden"
}

const Farewell = () => {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.section}>
                    <Subsubtitle>A First Farewell <span className="italic">(2018)</span></Subsubtitle>
                    Directed by <a target="_blank" rel="noreferrer" href="http://www.david-oesch.com/">Lina Wang</a>
                </p>
                <p className={styles.section}>
                    <span className="bold">Watch / Ticket</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://vimeo.com/ondemand/sinoluxtoronto">&rarr; Vimeo</a></span><br/>
                </p>
                <p className={styles.section}>
                    <span className="bold">Details</span><br/>
                    <div className={styles.detail}>
                        <div>
                            <span className="italic grey">Catogory</span><br/>
                            <span>Feature</span>
                        </div>
                        <div>
                            <span className="italic grey">Length</span><br/>
                            <span>90 min</span>
                        </div>
                        <div>
                            <span className="italic grey">Genre</span><br/>
                            <span>Drama / Family</span>
                        </div>
                        <div>
                            <span className="italic grey">Country</span><br/>
                            <span>China</span>
                        </div>
                        <div>
                            <span className="italic grey">Language</span><br/>
                            <span>Chinese / Uyghur</span>
                        </div>
                        <div>
                            <span className="italic grey">Color</span><br/>
                            <span>Color</span>
                        </div>
                        <div>
                            <span className="italic grey">Aspect Ratio</span><br/>
                            <span>1.85:1</span>
                        </div>
                    </div>
                </p>
                <p className={styles.section}>
                    <span className="bold">Summary</span><br/>
                    When Isa is not at school or working on his parents' farmyard, he spends carefree days with his friends - until the outside world starts forcing him to say one goodbye after another.
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/a-first-farewell/">&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt8779020/">&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/30337172/">&rarr; DOUBAN</a></span><br/>
                </p>
            </div>
            <div>
                <span className="bold">Gallery</span>
                <div style={imgWrapper}>
                    <Gallery/>
                </div>
            </div>
        </div>
    )
}

export default Farewell
