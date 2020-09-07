import React from "react"
import {Link} from "gatsby"

import BackgroundImg from "./background/brackgroundImage"
import Section from "../layouts/section"
import BWI from "../widgets/buttons/buttonWithImg"

import {PolygonStyles, UpperStyle, LowerStyle} from "./polygonStyles"

const Event = () => {
    return (
        <Section>
            <div style={UpperStyle}>
                <BWI>
                    <Link to="/events/">YEAR<br/>ROUND<br/>COMMUNITY<br/></Link>
                    <BackgroundImg style={PolygonStyles[4]}/>
                </BWI>
            </div>
            <div style={LowerStyle}>
                <BWI>
                    <Link to="/events/">EVENTS<br/>全年观影团活动<br/></Link>
                    <BackgroundImg style={PolygonStyles[3]}/>
                </BWI>
            </div>
        </Section>
    )
}

export default Event
