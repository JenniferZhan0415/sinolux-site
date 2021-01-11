import React from "react"

import {Subsubtitle} from "../../../layouts/title"

import JebelIm from "./gallery/jebel"

// import styles from "../exhibitions.module.scss"
import styles from "./films.module.scss"

const Jebel = () => {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.section}>
                    <Subsubtitle>Jebel Banat <span className="italic">(2019)</span></Subsubtitle>
                    Directed by <a target="_blank" rel="noreferrer" href="https://www.google.com/search?sxsrf=ALeKk02kfn2bOszvT2eWe25X-f33Takk2w:1610247378921&q=Sharine+Atif&stick=H4sIAAAAAAAAAOPgE-LVT9c3NMwwtDQxzDY1VIJw0wwqC5LiDYq1xLKTrfTTMnNywYRVSmZRanJJftEiVp7gjMSizLxUBceSzLQdrIwAyj6cI0oAAAA&sa=X&ved=2ahUKEwiX_JT4rpDuAhVtEFkFHRdECJEQmxMoATAeegQIFxAD&biw=2560&bih=1361">Sharine Atif</a>
                </p>
                <p className={styles.section}>
                    <span className="bold">Details</span><br/>
                    <div className={styles.detail}>
                        <div>
                            <span className="italic grey">Catogory</span><br/>
                            <span>Short Film</span>
                        </div>
                        <div>
                            <span className="italic grey">Length</span><br/>
                            <span>15 min</span>
                        </div>
                        <div>
                            <span className="italic grey">Genre</span><br/>
                            <span>Drama</span>
                        </div>
                        <div>
                            <span className="italic grey">Country</span><br/>
                            <span>Egypt</span>
                        </div>
                        <div>
                            <span className="italic grey">Language</span><br/>
                            <span>Arabic</span>
                        </div>
                        <div>
                            <span className="italic grey">Color</span><br/>
                            <span>Color</span>
                        </div>
                        <div>
                            <span className="italic grey">Aspect Ratio</span><br/>
                            <span>16:9</span>
                        </div>
                    </div>
                </p>
                <p className={styles.section}>
                    <span className="bold">Summary</span><br/>
                    The retelling of a melancholic 19th century Egyptian legend about two Bedouin sisters escaping forced marriages.
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/jebel-banat/">&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt10699872/">&rarr; IMDB</a></span><br/>
                    &rarr; Douban (Not Available)
                </p>
            </div>
            <div>
                <span className="bold">Gallery</span>
                <div className={styles.imgWrapper}>
                    <JebelIm/>
                </div>
            </div>
        </div>
    )
}

export default Jebel
