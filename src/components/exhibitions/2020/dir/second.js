import React from "react"

import styles from "./second.module.scss"

const SecondDir = (props) => {
    return (
        <div className={styles.second}>
            {
                props.films.map((film, i) => {
                    return (
                        <div className={styles.filmEntry}>
                            <div className={styles.title}>
                                <a href={"#" + i} className={styles.title}>
                                    {film.title}
                                </a>
                            </div>
                            <div>Y: {film.year}</div>
                            <div>D: {film.director}</div>
                        </div>
                    )
                })
            }
            
            <div className={styles.footer}>
                More Films <br/>
                Comming Soon...
            </div>
		</div>
    )
}

export default SecondDir
