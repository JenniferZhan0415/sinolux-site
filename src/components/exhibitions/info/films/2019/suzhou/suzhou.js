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

const Suzhou = () => {
    return (
        <div className={styles.container}>
            <div>
                <br/>
                <p className={styles.section}>
                    <Subsubtitle>Suzhou River</Subsubtitle>
                    Y: 2000<br/>
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
                            <span>83 min</span>
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
                            <span>N/A</span>
                        </div>
                    </div>
                </p>
                <p className={styles.section}>
                    <span className="bold">Summary</span><br/>
                    <p>
                        The river Suzhou that flows through Shanghai is a reservoir of filth, chaos and poverty, but also a meeting place for memories and secrets. Lou Ye, who spent his youth on the banks of the Suzhou, shows the river as a Chinese Styx, in which forgotten stories and mysteries come together.
                    </p>
                    <p>
                        Mardar, a motorcycle courier in his mid-twenties, rides all over the city with all kinds of packages for his clients. He knows every inch and is successful thanks to the fact that he never asks questions.
                    </p>
                    <p>
                        One day he is asked by a shady alcohol smuggler to deliver his sixteen-year-old daughter, Moudan, to her aunt. Mardar and Moudan grow fond of each other. But their tender happiness is disrupted when Moudan thinks that Mardar has kidnapped her for a ransom. She is so disappointed in him that she jumps off the bridge into the Suzhou River. Mardar is now suspected of murder. When a couple of years later he comes out of jail, he meets the dancer Meimei, an alter-ego of Moudan, and becomes fascinated by her.
                    </p>
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/suzhou-river/">&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt0234837/">&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/1299661/">&rarr; DOUBAN</a></span><br/>
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

export default Suzhou
