import React, {Component} from "react"

import styles from "./exhibitions.module.scss"

import Year2021 from "./2021/year"

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
                {/* navigation */}
                <div className={styles.navigation}>
                    <Year2021 setIntroId={this.setIntroId}/>
                    <Year2021/>
                    <Year2021/>
                    <Year2021/>
                    <Year2021/>
                </div>
    
                {/* content */}
                {content}
            </div>
        )
    }
}

export default Exhibitions
