import React from "react"

import styles from "./root.module.scss"

const RootDir = (props) => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.footer}>
                {React.Children.map(props.children, (child) => {
                    return <p>{child}</p>
                })}
            </div>
		</div>
    )
}

export default RootDir
