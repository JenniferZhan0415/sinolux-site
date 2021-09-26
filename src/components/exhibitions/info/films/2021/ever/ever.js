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

const Ever = () => {
    return (
        <div className={styles.container}>
            <div>
                <br/>
                <p className={styles.section}>
                    <Subsubtitle>Ever Since We Love</Subsubtitle>
                    Y: 2015<br/>
                    D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm1165953" className={styles.link}>Li Yu</a>
                </p>
                <p className={styles.section}>
                    <span className="bold">Watch / Ticket</span><br/>
                    <a target="_blank" rel="noreferrer" href="https://vimeo.com/ondemand/eswlsinolux" className={styles.link}>&rarr; Vimeo</a><br/>
                </p>
                <p className={styles.section}>
                    <span className="bold">Details</span><br/>
                    <div className={styles.detail}>
                        <div>
                            <span className="grey">Category</span><br/>
                            <span>Feature</span>
                        </div>
                        <div>
                            <span className="grey">Length</span><br/>
                            <span>105 min</span>
                        </div>
                        <div>
                            <span className="grey">Genre</span><br/>
                            <span>Drama</span>
                        </div>
                        <div>
                            <span className="grey">Region</span><br/>
                            <span>Mainland China</span>
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
                            <span>2.35:1</span>
                        </div>
                    </div>
                </p>
                <p className={styles.section}>
                    <span className="bold">Summary</span><br/>                    
                    The film “Ever Since We Love”, directed by Li Yu, is based on the novel of the same title. The story depicts the life of a medical school student who grows through his experience of love and friendship.
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/ever-since-we-love/" className={styles.link}>&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt4255554/" className={styles.link}>&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/25872931/" className={styles.link}>&rarr; DOUBAN</a></span><br/>
                </p>
            </div>
            <div>
                <br/>
                <span className="bold">Gallery</span>
                <div style={imgWrapper}>
                    {<Gallery/>}
                </div>
            </div>
        </div>
    )
}

export default Ever
