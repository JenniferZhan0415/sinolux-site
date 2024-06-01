import React from "react"

import {Subsubtitle} from "../../../../layouts/title"

import FarIm from "../gallery/far"
import StayIm from "../gallery/stay"
import IllIm from "../gallery/ill"
import TaipeiIm from "../gallery/taipei"
import TyphoonIm from "../gallery/typhoon"

import * as styles from "../films.module.scss"

const imgWrapper = {
    width: "12vw",
    overflow: "hidden"
}

// const imgWrapperLandscape = {
//     width: "20vw",
//     overflow: "hidden"
// }

const Bygone = () => {
    return (
        <div className={styles.collection5}>
            <div className={styles.collectionEntry}>
                <div>
                    <br/>
                    <p>
                        <Subsubtitle className="darkgrey">Section 5</Subsubtitle><br/>
                        <Subsubtitle>Bygone not Gone By</Subsubtitle>
                    </p>
                    <p>
                        当命运的激流将人冲向未知，原本亲密的人们是否还能同行？4 月 24 日 “往事并不如烟” 单元的五部影片，分别从爱情、亲情、家庭、夫妻四个维度的不同解读。在流水线上消磨青春的工厂小妹和以仙人跳为生的失足少女，同样遭遇了恋人分离，怀揣着生命的不可承受之轻，她们将如何前行？父亲的缺失造成的隐痛，是否能通过成长，在记忆与现实的台风里找寻到那片明朗的海滩，与父亲再次漫步？在历史潮流和个人命运冲突时，意志的满足与家庭的陪伴，又将如何抉择？志在远方的孩子们和怯懦的舅舅，同一屋檐下的至亲，无论是矛盾还是羁绊，最终依旧各奔东西。
                    </p>
                </div>
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35239549/">Stay</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm11023164/">Yushan Zhang</a>
                    </p>
                    <p className={styles.section}>
                        L: 23 min<br/>
                        S: 美国 60 年代末越战时期，美国政府实行抽签征兵制，中签的年轻人都被强制入编。当 Fiona 一家收到入伍通知时，留或离的决定终要做下。
                    </p>
                </div>
                <div style={imgWrapper}><StayIm/></div>
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/34961634/">Feel Ill At Ease</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: 乞少一
                    </p>
                    <p className={styles.section}>
                        L: 20 min
                        S: 察觉怀孕，女工小茜变得很焦虑。男友田涛为了追求自己的 “男人梦”，决定离开出生地。这更加深了小茜的痛苦。工作，生活，新生命，在种种未曾面对过的难题面前，小茜又该如何？
                    </p>
                </div>
                <div style={imgWrapper}><IllIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt10789872/">Taipei Blues</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: 张金帅 / 罗越
                    </p>
                    <p className={styles.section}>
                        L: 18 min<br/>
                        S: 十七岁的陈安琪是色情敲诈组织的一名诈骗少女，专以同网络上认识的有钱男性约会，并让黑帮勒索他们。她高中便辍学离开故乡，独居在台北，过著被谎言所包裹的流荡生活。她唯一可信任的人便是男友王毅杰，他们曾在滑板场度过一段欢乐时光。直到陈安琪发现自己怀上了王毅杰的孩子，却遭到他的冷漠对待。在感情与现实的荆棘之下，陈安琪决定生下这个孩子，逃离生活这摊苦水。
                    </p>
                </div>
                <div style={imgWrapper}><TaipeiIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35223494/">Before the Typhoon Comes</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://movie.douban.com/celebrity/1445442/">陈筠</a>
                    </p>
                    <p className={styles.section}>
                        S: 父亲带着阿琛到海边度假，没想到遇上台风。阿琛执意要下水。波涛汹涌中，阿琛看到自己的过去，并试着与之和解。<br/>
                        <br/>
                        这是一个从孩子的视角看待家庭关系的故事。随着孩子长大，童年记忆变得敏锐而模糊，而内心深处的忧伤只有通过寻找过去的自己才能化解。
                    </p>
                </div>
                <div style={imgWrapper}><TyphoonIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/34436798/">Far Journey</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: 冯杰
                    </p>
                    <p className={styles.section}>
                        L: 27 min<br/>
                        D: 母亲一直含辛茹苦照顾着仅有的三个家人，儿子因考上大学而离开，女儿回夫家生活，弟弟阿江也选择去寻找新的人生。而既渴望家人们离开去拥有更美好的人生，又不依依不舍的母亲，孤单地留在原地等候着，盼望着…
                    </p>
                </div>
                <div style={imgWrapper}><FarIm/></div> 
            </div>
        </div>
    )
}

export default Bygone
