import React from "react"

import {Subsubtitle} from "../../../../layouts/title"

import styles from "../films.module.scss"
import BaseIm from "../gallery/base"
import GoatIm from "../gallery/goat"
import MineIm from "../gallery/mine"

const imgWrapper = {
    width: "12vw",
    overflow: "hidden"
}

const imgWrapperLandscape = {
    width: "20vw",
    overflow: "hidden"
}

const Childhood = () => {
    return (
        <div className={styles.collection6}>
            <div className={styles.collectionEntry}>
                4 月 26 日 “深度广角下的童真暴力” 单元四部影片中，有人因为地域歧视而失去了所有朋友，有人通过炸虫子和偷游戏机来消化暴力父母的冲突，有人把对母亲的情感寄托在一头正在被捕杀的山羊上，也有人要找一只黑山羊献给魔鬼来停止厄运的发生，还有人在一天之内遭遇了家庭变故和分离，他们各自面对着成长中的困境，通过纯真的视角融化世间的无解，达成自我的救赎，展现成人世界易被忽略的生命本原。
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35322167/">Black Goat</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: 唐艺
                    </p>
                    <p className={styles.section}>
                        L: 12 min<br/>
                        S: Pasang, a new girl at a nunnery, has he r first period after hearing a late-night ghost story. She keeps it secret until she bleeds at a prayer session. She believes that she has been cursed and needs to sacrifice a black goat to avoid further misfortune.<br/>
                        <br/>
                        尼姑庵新来的小尼姑帕桑，在深夜听了一个鬼故事以后，经历了月经初潮。她保守着这个秘密， 直到在一次诵经中血流了出来。她坚信她是被下了咒，于是她需要一只黑山羊作为牺牲，要不然将来就会有大祸临头。
                    </p>
                </div>
                <div style={imgWrapper}></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35191327/">Secret Base</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://movie.douban.com/celebrity/1442279/">Qiying Lin</a>
                    </p>
                    <p className={styles.section}>
                        L: 12 min<br/>
                        S: 在广东汕头的一个工厂里，八岁的李博有一个属于他的秘密基地。在这个秘密基地中，他与他的外省好朋友孙伟每天中午都会偷偷地一块玩耍。但是有一天，当李博得知孙伟在学校里受到本地孩子的欺负后，他决定帮助孙伟，而这一决定使得一切开始发生改变…
                    </p>
                </div>
                <div style={imgWrapper}><BaseIm/></div>
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/33454853/">A Young Tough</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm9698892/">Pengwei Wang</a>
                    </p>
                    <p className={styles.section}>
                        L: 29 min<br/>
                        S: 一个炙热的暑假，男孩通过炸虫子的方式来消化父母濒临崩溃的暴力婚姻带给他的影响。同时，他极度渴望获得一个新上市的 Gameboy 游戏机。
                    </p>
                </div>
                <div style={imgWrapperLandscape}></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35371383/">Goat Mountain</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://movie.douban.com/celebrity/1452561/">Yifan Ge</a>
                    </p>
                    <p className={styles.section}>
                        L: 20 min<br/>
                        S: 女孩雪儿被父亲送至乡下奶奶家暂住，生活在冷漠亲情环境中的雪儿无意间得知了山鬼的存在，对此好奇的同时意外地收获了某种特殊的陪伴。本片聚焦于女孩的内心声音，用神秘主义调性暧昧地讲述出女孩迫于成人世界的无奈，并因此走上成长之路。
                    </p>
                </div>
                <div style={imgWrapper}><GoatIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35442481/">White Horses, Silver Mine</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm9814617/">Ziyi Jin</a>
                    </p>
                </div>
                <div style={imgWrapper}><MineIm/></div> 
            </div>
        </div>
    )
}

export default Childhood
