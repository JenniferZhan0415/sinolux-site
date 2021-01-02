import React from "react"

import styles from "./footer.module.scss"

const Footer = ({children}) => {
    return (
        <div className={styles.navBar}>
            {React.Children.map(children, (child, i) => {
                return <span>{child}</span>
            })}
		</div>
    )
}

export default Footer
