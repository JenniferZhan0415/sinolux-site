import React, {Component} from "react"

import * as styles from "../../exhibitions.module.scss"

class Nov extends Component {
    setId(id) {
        this.props.setIntroId(id)
    }

    render() {
        return (
            <div className={styles.month}>
                <div>
                    <div className={styles.sticky}><br/>November</div>
                </div>
                <div className={styles.titles}>
                    <span className={styles.event + " bold"}><br/>Retrospect & Rebirth</span><br/>
                    <button className={styles.title} onClick={this.setId.bind(this, 'johnny')} onKeyDown={this.setId.bind(this, 'johnny')}>
                        <span className="bold">Missing Johnny</span><br/>
                        Y: 2017<br/>
                        D: Xi Huang
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'recep')} onKeyDown={this.setId.bind(this, 'recep')}>
                        <span className="bold">The Receptionist</span><br/>
                        Y: 2017<br/>
                        D: Jenny Lu
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'somewhere')} onKeyDown={this.setId.bind(this, 'somewhere')}>
                        <span className="bold">Somewhere I Have Never Travelled</span><br/>
                        Y: 2009<br/>
                        D: Fu Tien-Yu
                    </button>
                </div>
            </div>
        )
    }
}

export default Nov
