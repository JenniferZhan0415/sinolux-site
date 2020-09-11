import React from "react"

import Cover from "../../layouts/cover"
import {covers} from "./covers"

import styles from "./table.module.scss"

const Articles = () => {
    return (
        <div className={styles.container}>
            <p>
                <Cover external="https://mp.weixin.qq.com/s/7IHZbFsZFhIbSeXa2BH6gw">
                    {covers["200908"]}
                    {"JCCC 2020 Guide"}
                    {"2020/09/08"}
                </Cover>
            </p>

            <p>
                <Cover external="https://mp.weixin.qq.com/s/cjkhhbW4AZTaAkDd-BwQIw">
                    {covers["200828"]}
                    {"《新变种人》观后感"}
                    {"2020/08/28"}
                </Cover>
            </p>

            <p>
                <Cover external="https://mp.weixin.qq.com/s/1WohowOWg3CRsN6p4SBnfA">
                    {covers["200827"]}
                    {"TIFF 2020 十部必看新片"}
                    {"2020/08/27"}
                </Cover>
            </p>

            <p>
                <Cover external="https://mp.weixin.qq.com/s/L5bhxHnHEXUAebvgEvmISQ">
                    {covers["200826"]}
                    {"关于爱情、婚姻、买房，这部电影说了点真话"}
                    {"2020/08/26"}
                </Cover>
            </p>
        </div>
    )
}

export default Articles
