import React, {Component} from "react"

import styles from "../../exhibitions.module.scss"

class Dec extends Component {
    setId(id) {
        this.props.setIntroId(id)
    }

    render() {
        return (
            <div className={styles.month}>
                <div>
                    <div className={styles.sticky}>December</div>
                </div>
                <div className={styles.titles}>
                    <p className={styles.event}>
                        With<br/>
                        <span className="italic">Pung-leung Kwan</span>
                    </p>
                    <button className={styles.title} onClick={this.setId.bind(this, 'wind')} onKeyDown={this.setId.bind(this, 'wind')}>
                        <span className="bold">Let the Wind Carry Me</span><br/>
                        Y: 2009<br/>
                        D: Hsiu-chiung Chiang & Pung-leung Kwan
                    </button>
                </div>
            </div>
        )
    }
}

export default Dec
