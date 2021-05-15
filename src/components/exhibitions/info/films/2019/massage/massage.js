import React from "react"

import {Subsubtitle} from "../../../../../layouts/title"

import Gallery from "./gallery"
import styles from "../../films.module.scss"

const imgWrapper = {
    marginTop: "1em",
    marginRight: "30%",
    width: "12vw",
    border: "2px solid black",
    overflow: "hidden"
}

const Massage = () => {
    return (
        <div className={styles.container}>
            <div>
                <br/>
                <p className={styles.section}>
                    <Subsubtitle>Massage</Subsubtitle>
                    Y: 2014<br/>
                    D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm0521601/">Lou Ye</a>
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
                            <span>115 min</span>
                        </div>
                        <div>
                            <span className="grey">Genre</span><br/>
                            <span>Drama</span>
                        </div>
                        <div>
                            <span className="grey">Country</span><br/>
                            <span>China</span>
                        </div>
                        <div>
                            <span className="grey">Language</span><br/>
                            <span>Mandarin</span>
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
                    A drama centered on the employees of a Nanjing massage parlor who share a common trait: they are all blind.
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/blind-massage/">&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt3469964/">&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/20020577/">&rarr; DOUBAN</a></span><br/>
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

export default Massage
