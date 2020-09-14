import React from "react"

import BWI from "../widgets/buttons/buttonWithImg"
// import BackgroundImg from "../home/background/brackgroundImage"
// import {Subsubtitle} from "../layouts/title"

import styles from "./footer.module.scss"

// const polygonStyles = [
//     {
//         position: "fixed",
//         bottom: "15%",
//         left: "5%",
//         width: "5%",
//         height: "auto",
//         transform: "rotate(25deg)"
//     },
//     {
//         position: "fixed",
//         bottom: "5%",
//         left: "5%",
//         width: "7%",
//         height: "auto",
//         transform: "rotate(150deg)"
//     },
// ]

const Footer = ({children}) => {
    return (
        <div className={styles.navBar}>
            {React.Children.map(children, (child, i) => {
                return <p>{child}</p>
                // return (
                //     <p>
                //         <BWI>
                //             {child}
                //             <BackgroundImg style={polygonStyles[i]}/>
                //         </BWI>
                //     </p>
                // )
            })}
		</div>
    )
}

export default Footer
