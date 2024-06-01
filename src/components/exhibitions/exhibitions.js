import React, {Component} from "react"

import * as styles from "./exhibitions.module.scss"

import Year2021 from "./2021/year"
import Year2020 from "./2020/year"
import Year2019 from "./2019/year"
import Year2018 from "./2018/year"
import Year2017 from "./2017/year"

import Introductions from "./info/info"

class Exhibitions extends Component {
    constructor() {
        super()

        this.setIntroId = this.setIntroId.bind(this)

        this.state = {
            introId: false
        }
    }

    setIntroId(id) {
        this.setState({
            introId: id
        })
    }

    render() {
        let content

        if (this.state.introId)
            content = Introductions[this.state.introId]
        else
            content = Introductions["johnny"]

        return (
            <div className={styles.container + " text-normal"}>
                {/* header */}
                <div className={styles.header}>
                    <div className={styles.headerNav}>
                        <div className={styles.headerY}>
                            <div style={{textAlign:"right"}} className={"bold red"}>Y</div>
                            <div className={styles.headerM}>
                                <div className={"bold yellow"}>M</div>
                                <div className={"bold"}><span className={"green"}>Programme</span> / <span className={"blue"}>Films</span></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.headerInfo + " bold purple"}>Info</div>
                </div>
                {/* content */}
                <div className={styles.content}>
                    {/* navigation */}
                    <div className={styles.navigation}>
                        <Year2021 setIntroId={this.setIntroId}/>
                        <Year2020 setIntroId={this.setIntroId}/>
                        <Year2019 setIntroId={this.setIntroId}/>
                        <Year2018 setIntroId={this.setIntroId}/>
                        <Year2017 setIntroId={this.setIntroId}/>
                    </div>
                    {/* content */}
                    <div className={styles.contentInfo}>
                        {content}
                    </div>
                </div>
                {/* scroll padding */}
                <div className={styles.scrollPadding}/>
            </div>
        )
    }
}

export default Exhibitions
