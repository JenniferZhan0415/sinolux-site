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

const Receptionist = () => {
    return (
        <div className={styles.container}>
            <div>
                <br/>
                <p className={styles.section}>
                    <span className="bold">The Receptionist</span><br/>
                    Y: 2017<br/>
                    D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm4432273/" className={styles.link}>Jenny Lu</a>
                </p>
                <p>
                    <span className="bold">Partnership</span><br/>
                    <a target="_blank" rel="noreferrer" href="https://www.tfai.org.tw/" className={styles.link}>Taiwan Film and Audiovisual Institute</a>
                </p>
                <p className={styles.section}>
                    <span className="bold">Watch / Ticket</span><br/>
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSd2D-uV6RW5GFwQVEiCe8JWJwNZgRXJJvCBrszRY-KvdZE4wg/viewform" className={styles.link}>&rarr; Google Form</a><br/>
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
                            <span>100 min</span>
                        </div>
                        <div>
                            <span className="grey">Genre</span><br/>
                            <span>Drama</span>
                        </div>
                        <div>
                            <span className="grey">Region</span><br/>
                            <span>Taiwan, UK</span>
                        </div>
                        <div>
                            <span className="grey">Language</span><br/>
                            <span>Chinese, English</span>
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
                    Weighed down by financial problems, Tina takes a job as a receptionist at an illegal massage parlour in London. As she slowly gets to know the women who work there, Tina is forced to question her values and morals. But how far will she be drawn into this world, and can she avoid losing herself in the process?
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/the-receptionist/" className={styles.link}>&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt4486838/" className={styles.link}>&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/26731242/" className={styles.link}>&rarr; DOUBAN</a></span><br/>
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

export default Receptionist
