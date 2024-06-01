import React from "react"

import * as styles from "./table.module.scss"

import Article200908 from "./2020/09/08/article"
import Article200827 from "./2020/08/27/article"
import Article200826 from "./2020/08/26/article"
import Article200910 from "./2020/09/10/article"
import Article200822 from "./2020/08/22/article"
import Article200731 from "./2020/07/31/article"

const Articles = () => {
    return (
        <div className={styles.container}>
            <Article200910/>
            <Article200908/>
            <Article200827/>
            <Article200826/>
            <Article200822/>
            <Article200731/>
        </div>
    )
}

export default Articles
