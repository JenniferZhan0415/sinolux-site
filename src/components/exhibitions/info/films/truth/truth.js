import React from "react"

import {Subsubtitle} from "../../../../layouts/title"

import EyeIm from "../gallery/eye"
import KusbekIm from "../gallery/kusbek"
import FlagIm from "../gallery/flag"

import * as styles from "../films.module.scss"
import CatIm from "../gallery/cat"

const imgWrapper = {
    width: "12vw",
    overflow: "hidden"
}

// const imgWrapperLandscape = {
//     width: "20vw",
//     overflow: "hidden"
// }

const Truth = () => {
    return (
        <div className={styles.collection5}>
            <div className={styles.collectionEntry}>
                <div>
                    <br/>
                    <p>
                        <Subsubtitle className="darkgrey">Section 6</Subsubtitle><br/>
                        <Subsubtitle>Hidden Truth</Subsubtitle>
                    </p>
                    <p>
                        4 月 25 日 “不容揭露的真相” 单元带来的四部短片，跨越时区与国度，却又蕴含着相同的精神内核。不同境遇下，每个人都做出了各自的选择，无关道德的批判，我们是该坚定内心的逻辑和执念还是随波逐流？四个故事都在不同程度、不同角度地讲述一些关于反叛的故事，老村长家的牛丢了，却意外地发现村里有一个天眼，是否该用它揭开迷惑？驯鹰人的妻子，又是否该出卖情怀，为丈夫治病还债？背负着母亲的期待，女孩儿能否不顾内心的疑惑站上领舞的位置？谁是不配做人的动物，谁又是那个站在人类话语中心的“人”？我们将在这些影片中，找到内心的答案
                    </p>
                </div>
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35239549/">Eye in the Sky</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://movie.douban.com/celebrity/1401912/">蒲巴</a>
                    </p>
                    <p className={styles.section}>
                        L: 20 min<br/>
                        S: A Tibetan village in the wild mountains connected with the sky. One day, his cattle suddenly disappear in front of his home. but finally became a story that all people in this village were prisoners.<br/>
                        <br/>
                        与天相连的莽莽群山之中有一座藏族村寨。有一天老村长旺丹家的牛丢了。在老村长旺丹寻牛的过程中，把全村人都牵扯到一桩桩不可描述的荒诞戏剧中。
                    </p>
                </div>
                <div style={imgWrapper}><EyeIm/></div>
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35205042/">Kusbek</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: 郭众愿
                    </p>
                    <p className={styles.section}>
                        L: 29 min
                        S: 哈萨克驯鹰人库斯别克的妻子历经种种磨难，拼尽全力与周围环境和人物做斗争，以满足丈夫的心愿 —— 让鹰干干净净活着的故事。本片以鹰的命运为线索，关注哈萨克驯鹰文化在现代社会中的生存状况，思考驯鹰人遭遇的生存困境，同时强调我们在守护传统文化时，更要尊重和保留其中蕴含 的质朴的人与人之间的情感关系。
                    </p>
                </div>
                <div style={imgWrapper}><KusbekIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35239892/">Under the Flag</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm8921692/">Jiawei Cheng</a>
                    </p>
                    <p className={styles.section}>
                        L: 14 min<br/>
                        S: A driven and conscientious girl at China's premier dance school gets the lead position in a prestigious performance but struggles to accept it after she learns that her mother has bribed the teacher to buy her the part.
                    </p>
                </div>
                <div style={imgWrapper}><FlagIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt10804770/">The Cat In Me</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm9567392/?ref_=tt_ov_dr">Xuerui Wang</a>
                    </p>
                    <p className={styles.section}>
                        S: Meno, a small-time actor, gradually finds himself not a submissive fish-like human anymore when he is beaten by life.
                    </p>
                </div>
                <div style={imgWrapper}><CatIm/></div> 
            </div>
        </div>
    )
}

export default Truth
