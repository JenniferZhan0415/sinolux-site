import React from "react"

import * as styles from "./table.module.scss"

import Article200828 from "./2020/08/28/article"
import Article200307 from "./2020/03/07/article"
import Article200215 from "./2020/02/15/article"
import Article200211 from "./2020/02/11/article"

const Articles = () => {
    return (
        <div className={styles.container}>
            <Article200828/>
            <Article200307/>
            <Article200215/>
            <Article200211/>
        </div>
    )
}

export default Articles
