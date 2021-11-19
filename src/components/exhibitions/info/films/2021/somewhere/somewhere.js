import React from "react"
import Gallery from "./gallery"
import styles from "../../films.module.scss"

const imgWrapper = {
    marginTop: "1em",
    marginRight: "30%",
    width: "15vw",
    border: "2px solid black",
    overflow: "hidden"
}

const Somewhere = () => {
    return (
        <div className={styles.container}>
            <div>
                <br/>
                <p className={styles.section}>
                    <span className="bold">Somewhere I Have Never Travelled</span><br/>
                    Y: 2009<br/>
                    D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm4524554/" className={styles.link}>Tien-Yu Fu</a>
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
                            <span>96 min</span>
                        </div>
                        <div>
                            <span className="grey">Genre</span><br/>
                            <span>Family, Drama</span>
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
                    In a secluded town by the sea, there live two lonely youths filled with angst and uncertainty. To the 15-year-old Ah-Guei, her world has always been different from others. Her eyes tell her that there are no greens or reds in the world. The only person she looks up to is her cousin, Ah-Xian. Ah-Xian has a big world map and a whole bookshelf of traveling guides. He takes Ah-Guei on imaginary journeys out of their little town, into a world full of wonders. Yet, the 20-year-old Ah-Xian harbors a secret, as he has come to realize that the only objects of his desires have always been people of his own sex. Ah-Guei and Ah-Xian dream and plan that one day when they can fly away to a place where there will be no more loneliness or angst
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/somewhere-i-have-never-travelled/" className={styles.link}>&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt1976614/" className={styles.link}>&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/3629232/" className={styles.link}>&rarr; DOUBAN</a></span><br/>
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

export default Somewhere
