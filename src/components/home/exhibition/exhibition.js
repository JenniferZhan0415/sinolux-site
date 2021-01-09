import React from "react"
import {Link} from "gatsby"

import BWI from "../../widgets/buttons/buttonWithImg"
import {Subtitle} from "../../layouts/title"

const info = {
    position: "fixed",
    top: "20vh",
    left: "40vw",
    textAlign: "center",
    fontSize: "4vh",
    lineHeight: "4vh"
}

const title = {
    fontSize: "3.2vh",
    lineHeight: "3.3vh",
    border: "0.3vh solid",
    borderRadius: "70%",
    padding: "1vh 1vw 1vh 1vw",
    background: "ghostwhite"
}

const screenings = {
    fontStyle: "italic",
    fontWeight: "400",
    borderRadius: "70%",
    padding: "4vh 3vw 4vh 3vw"
}

const Exhibition = (props) => {
    return (
        <div>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <Link to="/exhibitions/">EXHIBITIONS</Link>
                </Subtitle>
                <div style={info}>
                    <p style={title}>
                        "我的电影观念"<br/>
                        <span className={"italic"}>系列展映 VOL.25</span><br/>
                        介良文化<br/>
                        <span className={"italic"}>SINOLUX</span><br/>
                        翠贝卡最佳学生短片
                    </p>
                    <br/>
                    <p style={screenings} className="serif">
                        女儿山 (Jebel Banat, 2018)<br/>
                        "生"长 (Cru-Raw, 2019)<br/>
                        January 17th (Sun) 19:30 ~ 21:00
                    </p>
                </div>
            </BWI>
        </div>
    )
}

export default Exhibition
