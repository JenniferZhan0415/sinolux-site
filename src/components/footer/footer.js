import React from "react"

import * as styles from "./footer.module.scss"

const Footer = (props) => {
    return (
        <div className={styles.navBar + " " + props.className}>
            {React.Children.map(props.children, (child, i) => {
                return <span>{child}</span>
            })}
		</div>
    )
}

export default Footer
