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
                    <div className={styles.sticky}><br/>December</div>
                </div>
                <div className={styles.titles}>
                    <p className={styles.event + " bold"}>
                        <br/>LOU YE<br/>
                        <span className="italic">A Retrospective</span>
                    </p>
                    <button className={styles.title} onClick={this.setId.bind(this, 'suzhou')} onKeyDown={this.setId.bind(this, 'suzhou')}>
                        <span className="bold">Suzhou River</span><br/>
                        Y: 2000<br/>
                        D: Lou Ye
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'butterfly')} onKeyDown={this.setId.bind(this, 'butterfly')}>
                        <span className="bold">Purple Butterfly</span><br/>
                        Y: 2003<br/>
                        D: Lou Ye
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'mystery')} onKeyDown={this.setId.bind(this, 'mystery')}>
                        <span className="bold">Mystery</span><br/>
                        Y: 2012<br/>
                        D: Lou Ye
                    </button>
                    <button className={styles.title} onClick={this.setId.bind(this, 'blind')} onKeyDown={this.setId.bind(this, 'blind')}>
                        <span className="bold">Blind Message</span><br/>
                        Y: 2014<br/>
                        D: Lou Ye
                    </button>
                </div>
            </div>
        )
    }
}

export default Dec
