import React, {Component} from "react"

import * as styles from "../../exhibitions.module.scss"

class Sep extends Component {
    setId(id) {
        this.props.setIntroId(id)
    }

    render() {
        return (
            <div className={styles.month}>
                <div>
                    <div className={styles.sticky}><br/>September</div>
                </div>
                <div className={styles.titles}>
                    <span className={styles.event + " bold"}><br/>Films of Li Yu</span><br/>
                    <button className={styles.title} onClick={this.setId.bind(this, 'bm')} onKeyDown={this.setId.bind(this, 'bm')}>
                        <span className="bold">Buddha Mountain</span><br/>
                        Y: 2010<br/>
                        D: Li Yu
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'ever')} onKeyDown={this.setId.bind(this, 'ever')}>
                        <span className="bold">Ever Since We Love</span><br/>
                        Y: 2015<br/>
                        D: Li Yu
                    </button>
                </div>
            </div>
        )
    }
}

export default Sep
