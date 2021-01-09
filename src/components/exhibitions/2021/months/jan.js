import React, {Component} from "react"

import styles from "../../exhibitions.module.scss"

class Jan extends Component {
    setId(id) {
        this.props.setIntroId(id)
    }

    render() {
        return (
            <div className={styles.month}>
                <div>
                    <div className={styles.sticky}>January</div>
                </div>
                <div className={styles.titles}>
                    <p>
                        Shorts from TRIBECA<br/>
                        <span className="italic">Student Visionary Award</span>
                    </p>
                    <button className={styles.title} onClick={this.setId.bind(this, 'jebel')} onKeyDown={this.setId.bind(this, 'jebel')}>
                        <span className="bold red">Jebel Banat</span><br/>
                        Y: 2018<br/>
                        D: Sharine Atif
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'cru')} onKeyDown={this.setId.bind(this, 'cru')}>
                        <span className="bold yellow">Cru</span><br/>
                        Y: 2019<br/>
                        D: David Oesch
                    </button>
                </div>
            </div>
        )
    }
}

export default Jan
