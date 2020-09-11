import React from "react"

import {Subtitle, PageTitle} from "./title"

import styles from "./events.scss"

const EventTemplate = (props) => {
    return (
        <div>
            <PageTitle>
                <Subtitle>{props.title}</Subtitle>
            </PageTitle>

            <div className={styles.wrapper}>
                {props.children}
            </div>
        </div>
    )
}

export default EventTemplate
