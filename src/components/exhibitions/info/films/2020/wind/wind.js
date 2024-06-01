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

const Wind = () => {
    return (
        <div className={styles.container}>
            <div>
                <br/>
                <p className={styles.section}>
                    <Subsubtitle>Let the Wind Carry Me</Subsubtitle>
                    Y: 2009<br/>
                    D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm0944594/">Hsiu-Chiung Chiang</a>,  <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm0477095/">Pun-Leung Kwan</a>
                </p>
                <p className={styles.section}>
                    <span className="bold">Watch / Ticket</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://vimeo.com/ondemand/sinoluxtoronto">&rarr; Vimeo</a></span><br/>
                </p>
                <p className={styles.section}>
                    <span className="bold">Details</span><br/>
                    <div className={styles.detail}>
                        <div>
                            <span className="grey">Catogory</span><br/>
                            <span>Documentary</span>
                        </div>
                        <div>
                            <span className="grey">Length</span><br/>
                            <span>90 min</span>
                        </div>
                        <div>
                            <span className="grey">Genre</span><br/>
                            <span>Documentary</span>
                        </div>
                        <div>
                            <span className="grey">Region</span><br/>
                            <span>Hong Kong</span>
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
                            <span>N/A</span>
                        </div>
                    </div>
                </p>
                <p className={styles.section}>
                    <span className="bold">Summary</span><br/>                    
                    This fascinating look into the mind and inner life of one of Asia's greatest cinematographers, Mark Lee Ping-Bing, features famous collaborators like Wong Kar-wei, Hou Hsiao-Hsien, and Sylvia Chang, and Shu Qi. 
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/let-the-wind-carry-me/">&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt1562360/">&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/4074216/">&rarr; DOUBAN</a></span><br/>
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

export default Wind
