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

const Ashes = () => {
    return (
        <div className={styles.container}>
            <div>
                <br/>
                <p className={styles.section}>
                    <Subsubtitle>Ashes of Time</Subsubtitle>
                    Y: 1994<br/>
                    D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm0939182/">Wong Kar Wai</a>
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
                            <span>100 min</span>
                        </div>
                        <div>
                            <span className="grey">Genre</span><br/>
                            <span>Drama / Romance / History / Action</span>
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
                    "Farewell, My Concubine" is a movie with two parallel, intertwined stories. It is the story of two performers in the Beijing Opera, stage brothers, and the woman who comes between them. At the same time, it attempts to do no less than squeeze the entire political history of China in the twentieth century into a three-hour time-frame.
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/ashes-of-time/">&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt0109688/">&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/1292328/">&rarr; DOUBAN</a></span><br/>
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

export default Ashes
