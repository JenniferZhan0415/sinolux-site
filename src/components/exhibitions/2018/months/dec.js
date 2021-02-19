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
                        LESLIE CHEUNG<br/>
                        <span className="italic">A Retrospective</span>
                    </p>
                    <button className={styles.title} onClick={this.setId.bind(this, 'rouge')} onKeyDown={this.setId.bind(this, 'rouge')}>
                        <span className="bold">Rouge</span><br/>
                        Y: 1987<br/>
                        D: Stanley Kwan
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'concubine')} onKeyDown={this.setId.bind(this, 'concubine')}>
                        <span className="bold">Farewell My Concubine</span><br/>
                        Y: 1993<br/>
                        D: Chen Kaige
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'ash')} onKeyDown={this.setId.bind(this, 'ash')}>
                        <span className="bold">Ashes of Time</span><br/>
                        Y: 1994<br/>
                        D: Wong Kar-wai
                    </button>
                </div>
            </div>
        )
    }
}

export default Dec
