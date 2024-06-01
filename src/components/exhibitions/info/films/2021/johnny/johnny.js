import React from "react"

import {Subsubtitle} from "../../../../../layouts/title"

import Gallery from "./gallery"
import * as styles from "../../films.module.scss"

const imgWrapper = {
    marginTop: "1em",
    marginRight: "30%",
    width: "18vw",
    border: "2px solid black",
    overflow: "hidden"
}

const Johnny = () => {
    return (
        <div className={styles.container}>
            <div>
                <br/>
                <p className={styles.section}>
                    <Subsubtitle>Missing Johnny</Subsubtitle>
                    Y: 2017<br/>
                    D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm9061330/" className={styles.link}>Xi Huang</a>
                </p>
                <p>
                    <span className="bold">Partnership</span><br/>
                    <a target="_blank" rel="noreferrer" href="https://www.tfai.org.tw/" className={styles.link}>Taiwan Film and Audiovisual Institute</a>
                </p>
                <p className={styles.section}>
                    <span className="bold">Ticket</span><br/>
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSd2D-uV6RW5GFwQVEiCe8JWJwNZgRXJJvCBrszRY-KvdZE4wg/viewform" className={styles.link}>&rarr; Google Form</a><br/>
                </p>
                <p className={styles.section}>
                    <span className="bold">Watch</span><br/>
                    <a target="_blank" rel="noreferrer" href="https://player.tfai.org.tw/zh-TW/watchnow" className={styles.link}>&rarr; TFAI Player</a><br/>
                </p>
                <p className={styles.section}>
                    <span className="bold">Details</span><br/>
                    <div className={styles.detail}>
                        <div>
                            <span className="grey">Category</span><br/>
                            <span>Feature</span>
                        </div>
                        <div>
                            <span className="grey">Runtime</span><br/>
                            <span>104 min</span>
                        </div>
                        <div>
                            <span className="grey">Genre</span><br/>
                            <span>Drama</span>
                        </div>
                        <div>
                            <span className="grey">Region</span><br/>
                            <span>Taiwan</span>
                        </div>
                        <div>
                            <span className="grey">Language</span><br/>
                            <span>Chinese</span>
                        </div>
                        <div>
                            <span className="grey">Color</span><br/>
                            <span>Color</span>
                        </div>
                        <div>
                            <span className="grey">Aspect Ratio</span><br/>
                            <span>-</span>
                        </div>
                    </div>
                </p>
                <p className={styles.section}>
                    <span className="bold">Summary</span><br/>                    
                    Hsu Zi Qi is a young woman who lives alone in the city. Lee is the autistic son of Zi Qi's landlady, who tries to free himself from his protective mother. Feng is a shy young builder, who struggles with the constant breakdowns of his car. Through its interconnecting characters, the film subtly and intimately explores the moments of loneliness and regret that punctuate lives in a metropolitan city and emphasize the importance and necessity of simple human contact.
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/missing-johnny/" className={styles.link}>&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt7010456/" className={styles.link}>&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/26930782/" className={styles.link}>&rarr; DOUBAN</a></span><br/>
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

export default Johnny
