import React, {Component} from "react"

import styles from "../../exhibitions.module.scss"

class Nov extends Component {
    setId(id) {
        this.props.setIntroId(id)
    }

    render() {
        return (
            <div className={styles.month}>
                <div>
                    <div className={styles.sticky}>November</div>
                </div>
                <div className={styles.titles}>
                    <p className={styles.event}>
                        With<br/>
                        <span className="italic">Norris Wong</span>
                    </p>
                    <button className={styles.title} onClick={this.setId.bind(this, 'edward')} onKeyDown={this.setId.bind(this, 'edward')}>
                        <span className="bold">My Prince Edward</span><br/>
                        Y: 2019<br/>
                        D: Norris Wong
                    </button>
                </div>
            </div>
        )
    }
}

export default Nov
