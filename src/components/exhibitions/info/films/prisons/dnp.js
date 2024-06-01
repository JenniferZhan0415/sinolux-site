import React from "react"

import {Subsubtitle} from "../../../../layouts/title"

import PigIm from "../gallery/pig"
import GreedIm from "../gallery/greed"
import TreeIm from "../gallery/tree"
import BubbleIm from "../gallery/bubble"
import ConfIm from "../gallery/conf"

import * as styles from "../films.module.scss"

const imgWrapper = {
    width: "12vw",
    overflow: "hidden"
}

const Dnp = () => {
    return (
        <div className={styles.collection5}>
            <div className={styles.collectionEntry}>
                <div>
                    <br/>
                    <p>
                        <Subsubtitle className="darkgrey">Section 2</Subsubtitle><br/>
                        <Subsubtitle>Desire & Prison</Subsubtitle>
                    </p>
                    <p>
                        4 日 21 日 “欲与囚” 单元的几部影片分别带来对人性的不同解读，我们可以看到狭小车站吸烟室里逐渐揭露的底层众生相，也能通过吃猪肉这样一件日常的事情，产生人类主客体质问。通过镜头，我们看见了因为极端的爱与占有而绽放的欲望之花，看见了通过最彻底的释放而挣脱内心深处枷锁的萎靡青年。黑色幽默的基调中，展现了为了一己私利而促成的荒诞场面。若对欲望不理解，就永远不能从桎梏和恐惧中解脱；若摧毁了欲望，却也摧毁了生活；若扭曲压抑着欲望，同时也就摧毁了非凡之美。生命没有终极意义，我们需要在最沉痛的生命观里重新审视当下的欲望。
                    </p>
                </div>
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35144313/">Bubble</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://movie.douban.com/celebrity/1443916/">王昊楠</a>
                    </p>
                    <p className={styles.section}>
                        L: 14 min<br/>
                        S: 这是一个关于爱与奉献的都市怪谈。一天晚上，在胡同深处的小餐馆里，男人在女人面前吃下大量的植物，把自己变成了女人的食物。
                    </p>
                </div>
                <div style={imgWrapper}><BubbleIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/34866633/">Blue Pig</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm7933032/">Yaxiong Shao</a>
                    </p>
                    <p className={styles.section}>
                        L: 19 min<br/>
                        S: After a group of scientists' technological innovation, a new born pig's highest aspiration and sole value in life becomes being consumed and enjoyed by humans. In this story, a family takes a genetically altered pig home and prepares to slaughter it.<br/>
                        <br/>
                        科学家改造了所有新出生猪的 DNA，使它们生下来的最高愿望和生命中唯一的价值变为被人类杀掉并享用。在这个故事中，一个家庭把一只被改变成功的猪带回家，并准备宰杀它…… 抉择由此开始。
                    </p>
                </div>
                <div style={imgWrapper}><PigIm/></div>
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35441643/">The Greed of Human Nature</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: 魏浩东
                    </p>
                </div>
                <div style={imgWrapper}><GreedIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35231824/">In the Name of the Tree</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: 王聪
                    </p>
                    <p className={styles.section}>
                        L: 29 min<br/>
                        S: 刘士奇从北京回到刘家屯，想找大爷要回十万块租地钱。大爷用 “人情” 为理由拒绝，但士奇认为法律站在自己这边，两人陷入僵局。 这时，大娘突然被士奇的奶奶 “附体”，驳回了士奇的要求。这让刘士奇将信将疑。<br/>
                        <br/>
                        他在村里努力探索真相，发现了村里人尽皆知却无人点破的秘密。村民们威胁他，如果不听话，先人树会倒下，村子会遭殃，他跑不了。 于是，刘士奇的目的从 “要钱”，变成了 “要理”、“要赢”，他决定孤身一人对抗整个村子…
                    </p>
                </div>
                <div style={imgWrapper}><TreeIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35441650/">Confusion</a></Subsubtitle><br/>
                        Y: 2021<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://movie.douban.com/celebrity/1398469/">Zixuan Wang</a>
                    </p>
                </div>
                <div style={imgWrapper}><ConfIm/></div> 
            </div>
        </div>
    )
}

export default Dnp
