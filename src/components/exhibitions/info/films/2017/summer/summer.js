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

const Summer = () => {
    return (
        <div className={styles.container}>
            <div>
                <br/>
                <p className={styles.section}>
                    <Subsubtitle>The Summer is Gone</Subsubtitle>
                    Y: 2016<br/>
                    D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm7972509/">Zhang Dalei</a>
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
                            <span>106 min</span>
                        </div>
                        <div>
                            <span className="grey">Genre</span><br/>
                            <span>Drama / Family</span>
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
                            <span>Monochrome</span>
                        </div>
                        <div>
                            <span className="grey">Aspect Ratio</span><br/>
                            <span>2.35:1</span>
                        </div>
                    </div>
                </p>
                <p className={styles.section}>
                    <span className="bold">Summary</span><br/>
                    <p>
                        In Inner Mongolia in the early 1990s, 12-year-old Xiaolei enjoys summer with his father, who works at a film studio, and his education-minded mother. But life is rapidly changing, as stable jobs at state-owned companies disappear. 
                    </p>
                    <p>
                        Hohhot-born director Zhang Dalei, who was inspired by "the magic of a daydream" he experienced while visiting his grandmother, has created a portrait of his country's past, in beautiful monochrome. Distancing itself from the nostalgic tone of popular teen dramas, the film presents a boy's detached view of the world. Pema Tseden, of Old Dog and Tharlo, is the executive producer.
                    </p>
                    <p>
                        In a small town in western China in the early 1990s, after finishing primary school, Xiaolei looks forward to his long-awaited summer vacation, free of homework. However, this hot summer is not the usual leisurely summer he imagines, as it coincides with the transformation of state-owned companies and the loss of job security. While Xiaolei and his friends idle away the days, the shock of the reformation of state-owned enterprises sees his parents, seemingly calm in the blazing sunshine, seething wg with inner anxiety. As time passes, Xiaolei has a feeling that a revolution has quietly taken place. His father has to become a migrant worker to make a living, with the mother and son relying on each other. Xiaolei feels that life has changed completely. One night at the beginning of autumn, the epiphyllum in Xiaolei's yard blooms, as if it were an apocalypse.
                    </p>
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/the-summer-is-gone/">&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt6118258/">&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/26820836/">&rarr; DOUBAN</a></span><br/>
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

export default Summer
