import React, {Component} from "react"

import styles from "../../exhibitions.module.scss"

class Feb extends Component {
    setId(id) {
        this.props.setIntroId(id)
    }

    render() {
        return (
            <div className={styles.month}>
                <div>
                    <div className={styles.sticky + " " + styles.m}><br/>February</div>
                </div>
                <div className={styles.titles}>
                    <br/>
                    <p className={styles.event + " bold"}>
                        Virtual Screening<br/>
                    </p>
                    <button className={styles.title} onClick={this.setId.bind(this, 'farewell')} onKeyDown={this.setId.bind(this, 'farewell')}>
                        <span className="bold">A First Farewell</span><br/>
                        Y: 2018<br/>
                        D: Lina Wang
                    </button>
                </div>
            </div>
        )
    }
}

export default Feb
