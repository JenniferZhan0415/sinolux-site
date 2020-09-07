import React from "react"

import Section from "./section"
import {Subtitle, PageTitle} from "./title"

import styles from "./events.scss"

const EventTemplate = (props) => {
    return (
        <Section>
            <PageTitle>
                <Subtitle>{props.title}</Subtitle>
            </PageTitle>

            <div className={styles.wrapper}>
                {props.children}
            </div>
        </Section>
    )
}

export default EventTemplate
