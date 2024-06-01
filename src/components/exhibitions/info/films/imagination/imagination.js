import React from "react"

import {Subsubtitle} from "../../../../layouts/title"

import BlueIm from "../gallery/blue"
import PoolIm from "../gallery/pool"
import JenIm from "../gallery/jenny"
import EggIm from "../gallery/egg"
import CommonIm from "../gallery/common"

import * as styles from "../films.module.scss"

const imgWrapper = {
    width: "12vw",
    overflow: "hidden"
}

const imgWrapperLandscape = {
    width: "20vw",
    overflow: "hidden"
}

const Imagination = () => {
    return (
        <div className={styles.collection5}>
            <div className={styles.collectionEntry}>
                <div>
                    <br/>
                    <p>
                        <Subsubtitle className="darkgrey">Section 4</Subsubtitle><br/>
                        <Subsubtitle>Serendipity & Imagination</Subsubtitle>
                    </p>
                    <p>
                        4 月 23 日 “偶然与想象” 带来的五部作品，导演通过不同的拍摄手法展现出了电影作为表达媒介的更多可能性。他们打破了传统叙事，通过作者化的视听语言传递出最准确的状态以及感受。有的是一首散文诗，制作了一个叫做池塘的心灵容器，它承载了女孩儿的生命和死亡的恐惧；有的是梦境与现实的交织体，不断分裂着，也失控着。那位失去归属与认同的他乡之客，最终选择了如动物般回归丛林。交错的平行时空里，双方始终也无法完成相遇。彗星撞上地球后，宇宙存留了最后一段录像。碎片式的影像控制着我们的情绪，在脑中放映，变成故事，并被赋予意义。
                    </p>
                </div>
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35441652/">池塘</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: 祝婧
                    </p>
                </div>
                <div style={imgWrapper}><PoolIm/></div>
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35441665/">Jenny</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: 宋俊义
                    </p>
                </div>
                <div style={imgWrapper}><JenIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/33387345/">The Seven Eggs</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: 孙翔平 / 高磊
                    </p>
                    <p className={styles.section}>
                        L: 28 min<br/>
                        S: 大宇宙的彗星撞向地球，地球即将毁灭，四个普通到没有超能力的女孩，去寻找七颗莫名其妙的蛋。<br/>
                        <br/>
                        七个蛋凑齐了，人类就能躲过死亡，犹如凑齐龙珠，便能拯救地球。死亡注定的 48 小时里，她们懂得要开始抓紧时间去寻找存在的意义
                    </p>
                </div>
                <div style={imgWrapper}><EggIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35418579/">A Common Confusion</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://movie.douban.com/celebrity/1364286/">王棚</a>
                    </p>
                    <p className={styles.section}>
                        L: 14 min
                        S: 灵感取自奥地利作家卡夫卡的短篇寓言 "A Common Confusion"，这部在卡夫卡作品中稍显冷僻的短篇描绘了一个由荒谬和焦虑编织而成的模糊图景，主人公 A 由于信息（手机）的缺失和受困于 “心理时空” 与 “现实时空” 的落差，始终与 B 无法完成相遇。这个看似荒谬的故事实际上与我们的世俗生活的种种暗自相合。
                    </p>
                </div>
                <div style={imgWrapper}><CommonIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35441659/">蓝色幻想曲</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: 斯婷
                    </p>
                </div>
                <div style={imgWrapperLandscape}><BlueIm/></div> 
            </div>
        </div>
    )
}

export default Imagination
