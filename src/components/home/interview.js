import React from "react"
import {Link} from "gatsby"

import BackgroundImg from "./background/brackgroundImage"
import Section from "../layouts/section"
import BWI from "../widgets/buttons/buttonWithImg"

import {PolygonStyles, UpperStyle, LowerStyle} from "./polygonStyles"

const Interview = () => {
    return (
        <Section>
            <div style={UpperStyle}>
                <BWI>
                    <Link to="/">INTERVIEW<br/>电影报道<br/></Link>
                    <BackgroundImg style={PolygonStyles[4]}/>
                </BWI>
            </div>
            <div style={LowerStyle}>
                <BWI>
                    <Link to="/">REVIEW<br/>电影评论<br/></Link>
                    <BackgroundImg style={PolygonStyles[5]}/>
                </BWI>
            </div>
        </Section>
    )
}

export default Interview
