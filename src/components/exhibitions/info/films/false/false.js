import React from "react"

import {Subsubtitle} from "../../../../layouts/title"

import TwiIm from "../gallery/twilight"
import UnfinishedIm from "../gallery/unfinished"
import DayflyIm from "../gallery/fly"
import FutureIm from "../gallery/future"
import DayouIm from "../gallery/dayou"
import IslandIm from "../gallery/island"

import styles from "../films.module.scss"

const imgWrapper = {
    width: "12vw",
    overflow: "hidden"
}

const imgWrapperLandscape = {
    width: "20vw",
    overflow: "hidden"
}

const False = () => {
    return (
        <div className={styles.collection6}>
            <div className={styles.collectionEntry}>
            在 4 月 22 日 “虚实之间” 单元中，我们将为您带来的四部先锋动画影像创作 -- 他们用隐喻尖锐的手法、跳跃的思维来反思真实的人类社会，和两部纪录片 -- 带领着我们，通过写实的镜头，跨越语言和国界的巴别塔，描述日常经验之外的严肃与梦幻。幻想与真实并不是相斥的两条平行线，而是互相交织，共同展现多元的电影艺术魅力。
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35262821/">Twilight Zone</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: 仲晴暄
                    </p>
                    <p className={styles.section}>
                        L: 40 min<br/>
                        S: 重点围绕主人公戴聪阳，用镜头记录关于她爱情、家庭以及她内心世界变化这两条线索，记录她与她周围人的生活和她在她 20 岁这一年所发生的故事。通过一个个关于她与男友相处的场景、她与她家庭相处的场景、她家庭的环境、她到杭州来求职、她带着男友去见反对这段恋情的家长等事件来展现她不断在生活中进行选择、进行周旋时所扮演的女性角色。
                    </p>
                </div>
                <div style={imgWrapper}><TwiIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35201561/">Unfinished Lives</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm8936924/">Yucong Chen</a>
                    </p>
                    <p className={styles.section}>
                        L: 23 min<br/>
                        S: In 2014, 24-year-old USC graduate student, Xinran Ji, was beaten to death by four teens when returning home from a study session. A lawyer, Rose Tsai, took it upon herself to tirelessly advocate on his behalf and represent his parents, as they attempt to understand the senseless tragedy together.<br/>
                        <br/>
                        2014 年 7 月 24 日，24 岁的南加大研究生纪欣然在学习结束回家的途中遭四名歹徒抢劫，并被殴打致死。为伸张正义，华裔女律师蔡玟慧代表被害人家属义务出庭，开始了长达数年的艰苦诉讼。
                    </p>
                </div>
                <div style={imgWrapper}><UnfinishedIm/></div>
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/33454853/">The Future that We Lost</a></Subsubtitle><br/>
                        Y: 2018<br/>
                        D: 高文谦
                    </p>
                    <p className={styles.section}>
                        L: 8 min 8 sec<br/>
                        S: 我将古代 18，19，20 世纪的人类关于 21 世纪的设想的蓝图进行了梳理 (建筑，科技，城市规划，生活方式等) ，将人类未能按照计划在当下时间点上实现和放弃了的计划重构了一个平行世界 《丢失的未来》。
                    </p>
                </div>
                <div style={imgWrapperLandscape}><FutureIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35083385/">Dayfly</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: 易宝星辰
                    </p>
                    <p className={styles.section}>
                        L: 14 min<br/>
                        S: 生命是一束打破黑暗的阳光，茫茫宇宙之中，人类乃至世间万物向死而生的过程，都如蜉蝣一日般短暂而绚烂。请在活着的时候去好好感受这个世界。以只有一天生命的 “蜉蝣” 和一天的时间作为线索串联。时间从 0 点开始，到次日 24 点结束，其间穿插 3 个小故事。
                    </p>
                </div>
                <div style={imgWrapper}><DayflyIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35165241/">大有</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: 马春鑫
                    </p>
                </div>
                <div style={imgWrapper}><DayouIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35442478/">Island</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm7097304/">Mengqian Chen</a>
                    </p>
                    <p className={styles.section}>
                        L: 8 min<br/>
                        S: On a deserted island lives a desperately lonely Cyclops. Time passes, the seasons too. One summer night, he discovers an egg from which a bird hatches. Very quickly a fusional relationship binds them, until summer came back...
                    </p>
                </div>
                <div style={imgWrapper}><IslandIm/></div> 
            </div>
        </div>
    )
}

export default False
