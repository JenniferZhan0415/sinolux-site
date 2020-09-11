import React from "react"
import {Link} from "gatsby"

import BackgroundImg from "./background/brackgroundImage"
import Section from "../layouts/section"
import BWI from "../widgets/buttons/buttonWithImg"

import {PolygonStyles, UpperStyle, LowerStyle} from "./polygonStyles"

const Exhibition = () => {
    return (
        <div>
            <div style={UpperStyle}>
                <span>Exhibition &nbsp;</span>
                <BWI>
                    <Link to="/exhibitions/2017">2017</Link>&nbsp;
                    <BackgroundImg style={PolygonStyles[0]}/>
                </BWI>
                <BWI>
                    <Link to="/exhibitions/2018">2018</Link>&nbsp;
                    <BackgroundImg style={PolygonStyles[1]}/>
                </BWI>
                <BWI>
                    <Link to="/exhibitions/2019">2019</Link>&nbsp;
                    <BackgroundImg style={PolygonStyles[2]}/>
                </BWI>
            </div>
            <div style={LowerStyle}>
                <BWI>
                    <Link to="/about-us">© SINO<span className="italic">LUX</span> FILM 华光电影<br/></Link>
                    <BackgroundImg style={PolygonStyles[3]}/>
                </BWI>
            </div>
        </div>
    )
}

export default Exhibition
