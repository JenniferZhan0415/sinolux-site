import React from "react"

import RootDir from "./dir/root"
import SecondDir from "./dir/second"
import ContentDir from "./dir/content"

import styles from "./index.module.scss"

const style = {
    width: "100%",
    height: "100%",
    fontWeight: 400
}

const E2020 = () => {
    return (
        <div style={style} className={styles.page}>
            {/* level 1 */}
            <RootDir title={<a href="#2020">November<br/>Screenings</a>}>
                <a href="#2020">
                    2020<br/>
                    Film<br/>
                    Exhibitions
                </a>
            </RootDir>
            {/* level 2 */}
            <SecondDir
                films={[{
                    title: "My Prince Edward",
                    year: 2019,
                    director: "Norris Wong"
                }]}
            />
            {/* level 3 */}
            <ContentDir/>
        </div>
    )
}

export default E2020
