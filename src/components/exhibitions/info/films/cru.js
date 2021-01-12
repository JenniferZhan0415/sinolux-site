import React from "react"

import {Subsubtitle} from "../../../layouts/title"

// import JebelIm from "./gallery/jebel"
// import Cru1 from "./gallery/cru1"
// import Cru2 from "./gallery/cru2"
// import Cru3 from "./gallery/cru3"

// import styles from "../exhibitions.module.scss"
import styles from "./films.module.scss"

const Cru = () => {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.section}>
                    <Subsubtitle>Cru <span className="italic">(2019)</span></Subsubtitle>
                    Directed by <a target="_blank" rel="noreferrer" href="http://www.david-oesch.com/">David Oesch</a>
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
                            <span>10 min</span>
                        </div>
                        <div>
                            <span className="italic grey">Genre</span><br/>
                            <span>Thrill</span>
                        </div>
                        <div>
                            <span className="italic grey">Country</span><br/>
                            <span>Switzerland</span>
                        </div>
                        <div>
                            <span className="italic grey">Language</span><br/>
                            <span>French</span>
                        </div>
                        <div>
                            <span className="italic grey">Color</span><br/>
                            <span>Color</span>
                        </div>
                        <div>
                            <span className="italic grey">Aspect Ratio</span><br/>
                            <span>2.35:1</span>
                        </div>
                    </div>
                </p>
                <p className={styles.section}>
                    <span className="bold">Summary</span><br/>
                    Full of hope, diligence and hunger for more, Jeanne, a young chef from a good family, starts her job in a Michelin star restaurant. To rise up in the brutal pecking order, she has to impress her merciless Chef de Cuisine which results in a war of differences in- and outside of the kitchen.
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/cru-2019/details/">&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt10873212/">&rarr; IMDB</a></span><br/>
                    &rarr; Douban (Not Available)
                </p>
            </div>
            <div>
                <span className="bold">Gallery</span>
                {/* <div className={styles.imgWrapper}>
                    <Cru1/>
                </div> */}
                {/* <div className={styles.imgWrapper}>
                    <Cru2/>
                </div>
                <div className={styles.imgWrapper}>
                    <Cru3/>
                </div> */}
            </div>
        </div>
    )
}

export default Cru
