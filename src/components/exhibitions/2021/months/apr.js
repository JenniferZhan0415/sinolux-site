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
                    <div className={styles.sticky}><br/>April</div>
                </div>
                <div className={styles.titles}>
                    <span className="bold grey"><br/>Shorts by Young Filmmakers</span><br/>
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
                    <button className={styles.title} onClick={this.setId.bind(this, 'bygone')} onKeyDown={this.setId.bind(this, 'bygone')}>
                        <span className="bold">Section 5</span><br/>
                        往事并不如烟<br/>
                        Bygone not Gone By
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'truth')} onKeyDown={this.setId.bind(this, 'truth')}>
                        <span className="bold">Section 6</span><br/>
                        不容揭露的真相<br/>
                        Hidden Truth
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'childhood')} onKeyDown={this.setId.bind(this, 'childhood')}>
                        <span className="bold">Section 7</span><br/>
                        深度广角下的童真暴力<br/>
                        Childhood Violence
                    </button>
                </div>
            </div>
        )
    }
}

export default Apr
