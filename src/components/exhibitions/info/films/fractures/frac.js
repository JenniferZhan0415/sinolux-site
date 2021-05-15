import React from "react"

import {Subsubtitle} from "../../../../layouts/title"

import LesIm from "../gallery/les"
import HoldIm from "../gallery/hold"
import KindIm from "../gallery/kind"
import MintIm from "../gallery/mint"

import styles from "../films.module.scss"

const imgWrapper = {
    width: "12vw",
    overflow: "hidden"
}

const Frac = () => {
    return (
        <div className={styles.collection}>
            <div className={styles.collectionEntry}>
                <div>
                    <br/>
                    <p>
                        <Subsubtitle className="grey">Section 1</Subsubtitle><br/>
                        <Subsubtitle>Fractures</Subsubtitle>
                    </p>
                    <p>
                        万物皆有裂痕，那是光照进来的地方。4 月 20 日 “裂痕” 单元带来的四部短片，讲述了四位女性的故事，她们中，有人是立志拯救同志群体的地球上最后一位百合，是奋力抓住一切希望却换来了谎言与欺骗的十七岁少女，是在同性恋儿子与宗教信仰中踌躇的母亲，是一对脆弱且在破碎边缘的亲密友人。她们都曾倔强且笃定，渴望抓住一个明晰的梦，却不得不在割裂和冲突中醒来。
                    </p>
                </div>
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/30164466/">The Last Lesbian</a></Subsubtitle><br/>
                        Y: 2018<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm8838945/">Jingyu Liu</a>
                    </p>
                    <p className={styles.section}>
                        L: 30 min<br/>
                        S: 150 年后，所有同性恋被大魔王发射去了外太空，苏珊娜被母亲藏起来，成为地球上最后一个拉拉。想成为英雄的她发明时光机回到 2018，准备阻止大魔王的母亲去和她未来的老公见面，竟然掰弯了大魔王的妈妈 —— 美国乡村网红贝拉。
                    </p>
                </div>
                <div style={imgWrapper}><LesIm/></div>
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/34837751/">Hold On</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm9464685/">Haiyang Yu</a>
                    </p>
                    <p className={styles.section}>
                        L: 23 min<br/>
                        S: Hold On 讲述了发生在母子之间的故事。母亲是虔诚的天主教徒，独自照顾天生患有残疾的儿子。一天，她发现儿子是同性恋并且意识到他拥有每个成年男人都有的对性的渴望。可是，无论是同性恋还是婚前性行为都是宗教所禁止的。于是，她陷入了内心的挣扎，到底是继续对她的神保持绝对忠诚，还是对儿子抱以爱和理解？
                    </p>
                </div>
                <div style={imgWrapper}><HoldIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/35442154/">Kindling</a></Subsubtitle><br/>
                        Y: 2020<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm6914185/">Xinyi Zhu</a>
                    </p>
                    <p className={styles.section}>
                        L: 14 min<br/>
                        S: When a young woman drivers her estranged childhood best friend to get an abortion, the two are forced to confront each other about who they are and what they have become.<br/>
                        <br/>
                        两个女孩幼年在乡下结伴长大，但因为成长的分歧而决裂，久无联系。一个怀孕，另一个开车带她去堕胎。路上的朝夕相处使她们的关系再次发酵，旧日的裂痕许会制造新的火花。
                    </p>
                </div>
                <div style={imgWrapper}><KindIm/></div> 
            </div>
            <div className={styles.collectionEntry}>
                <div>
                    <p className={styles.section}>
                        <Subsubtitle><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/34793045/">Cinnamon Mint</a></Subsubtitle><br/>
                        Y: 2019<br/>
                        D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm10738165/">Xuyu Zhang</a>
                    </p>
                    <p className={styles.section}>
                        L: 32 min<br/>
                        S: It is centered on the story of a 17-year-old girl who has a hidden passion for acting but has to face the gritty reality where lies and disillusionment surround her life.<br/>
                        <br/>
                        十七岁的英国少女雪莉热爱表演，从东伦敦搬到海边小镇伯恩茅斯之后，她就经常把自己锁在房间里苦练电影台词。在小镇青年山姆的引荐下，雪莉见到了来自伦敦的演员经纪人史密斯，并得到了赏识。这看似美好的开端却逐渐演变成了一场伤心之旅。
                    </p>
                </div>
                <div style={imgWrapper}><MintIm/></div> 
            </div>
        </div>
    )
}

export default Frac
