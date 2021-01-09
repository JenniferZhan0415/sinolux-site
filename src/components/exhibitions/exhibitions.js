import React, {Component} from "react"

import styles from "./exhibitions.module.scss"

import Year2021 from "./2021/year"
import Year2020 from "./2020/year"

const introductions = {
    "jebel": <div>haha</div>,
    "cru": <div>hehe</div>
}

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
            content = introductions[this.state.introId]
        else
            content = null

        return (
            <div className={styles.container + " text-normal"}>
                {/* header */}
                <div className={styles.header}>
                    <div className={styles.headerNav}>
                        <div className={styles.headerY}>
                            <div style={{textAlign:"right"}} className={"bold red"}>Y</div>
                            <div className={styles.headerM}>
                                <div className={"bold yellow"}>M</div>
                                <div className={"bold green"}>Programme / Films</div>
                            </div>
                        </div>
                    </div>
                    <div className={"bold blue"}>Info</div>
                </div>
                {/* content */}
                <div className={styles.content}>
                    {/* navigation */}
                    <div className={styles.navigation}>
                        <Year2021 setIntroId={this.setIntroId}/>
                        <Year2020/>
                        <Year2021/>
                        <Year2021/>
                        <Year2021/>
                    </div>
                    {/* content */}
                    {content}
                </div>
            </div>
        )
    }
}

export default Exhibitions
