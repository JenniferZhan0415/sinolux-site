import React, {Component} from "react"

import styles from "../../exhibitions.module.scss"

class Apr extends Component {
    setId(id) {
        this.props.setIntroId(id)
    }

    render() {
        return (
            <div className={styles.month}>
                <div>
                    <div className={styles.sticky}>April</div>
                </div>
                <div className={styles.titles}>
                    <p className={styles.event}>
                        Shorts by Young Filmmakers<br/>
                    </p>
                    <button className={styles.title} onClick={this.setId.bind(this, 'frac')} onKeyDown={this.setId.bind(this, 'frac')}>
                        <span className="bold">Section 1</span><br/>
                        裂痕<br/>
                        Fractures
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'dnp')} onKeyDown={this.setId.bind(this, 'dnp')}>
                        <span className="bold">Section 2</span><br/>
                        欲与囚<br/>
                        Desire & Prison
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'false')} onKeyDown={this.setId.bind(this, 'false')}>
                        <span className="bold">Section 3</span><br/>
                        虚实之间<br/>
                        Between the Real & False
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'imagination')} onKeyDown={this.setId.bind(this, 'imagination')}>
                        <span className="bold">Section 4</span><br/>
                        偶然与想象<br/>
                        Serendipity & Imagination
                    </button>
                </div>
            </div>
        )
    }
}

export default Apr
