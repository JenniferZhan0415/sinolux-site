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
                    <div className={styles.sticky}><br/>October</div>
                </div>
                <div className={styles.titles}>
                    <p className={styles.event + " bold"}>
                        <br/>BLUE<br/>
                        <span className="italic">Film Exhibition</span>
                    </p>
                    <button className={styles.title} onClick={this.setId.bind(this, 'gate')} onKeyDown={this.setId.bind(this, 'gate')}>
                        <span className="bold">Blue Gate Crossing</span><br/>
                        Y: 2002<br/>
                        D: Yi Zhiyan
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'current')} onKeyDown={this.setId.bind(this, 'current')}>
                        <span className="bold">Crosscurrent</span><br/>
                        Y: 2016<br/>
                        D: Yang Chao
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'summer')} onKeyDown={this.setId.bind(this, 'summer')}>
                        <span className="bold">The Summer is Gone</span><br/>
                        Y: 2016<br/>
                        D: Zhang Dalei
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'free')} onKeyDown={this.setId.bind(this, 'free')}>
                        <span className="bold">Free and Easy</span><br/>
                        Y: 2015<br/>
                        D: Geng Jun
                    </button>
                </div>
            </div>
        )
    }
}

export default Dec
