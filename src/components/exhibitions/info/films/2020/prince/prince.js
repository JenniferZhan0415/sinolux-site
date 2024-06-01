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

const Prince = () => {
    return (
        <div className={styles.container}>
            <div>
                <br/>
                <p className={styles.section}>
                    <Subsubtitle>My Prince Edward</Subsubtitle>
                    Y: 2019<br/>
                    D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm3925655/">Norris Wong</a>
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
                            <span>Feature</span>
                        </div>
                        <div>
                            <span className="grey">Length</span><br/>
                            <span>92 min</span>
                        </div>
                        <div>
                            <span className="grey">Genre</span><br/>
                            <span>Drama</span>
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
                            <span>2.35:1</span>
                        </div>
                    </div>
                </p>
                <p className={styles.section}>
                    <span className="bold">Summary</span><br/>                    
                    Golden Plaza in Prince Edward district is a shopping mall in Hong Kong, known for bridal shops and cheap wedding supplies. Fong (<a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm1413739/">Stephy Tang</a>) works in one such bridal shop. She has been with Edward, the owner of a wedding photography shop, for years. Fong must sort out the sham marriage that she was paid to take part in years ago before she can get married for real.
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/my-prince-edward/">&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt11070230/">&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/30159567/">&rarr; DOUBAN</a></span><br/>
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

export default Prince
