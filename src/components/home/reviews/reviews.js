import React from "react"

import Section from "../../section/section"

import Row from "../../layouts/row"
import Col from "../../layouts/col"
import ImWrapper from "../../layouts/image"
import ContentWrapper from "../../layouts/content"

import BackgroundInterview from "./background-interview"
import BackgroundReview from "./background-review"

import Button from "../../widgets/button"

import styles from "./reviews.module.css"

const HomeReviews = () => {
    return (
        <Section>
            <Row style={[styles.row, styles.rowInterview]}>
                <Col style={styles.colInterview}>
                    <ImWrapper style={styles.imInterview}>
                        <BackgroundInterview/>
                    </ImWrapper>
                    <ContentWrapper style={styles.content}>
                        <p className={`en lg button ` + styles.button}>
                            INTERVIEW<br/>
                            <Button to="/">
                                <span className="zh">采访报道</span>
                                &rarr;
                            </Button>
                        </p>
                    </ContentWrapper>
                </Col>

                <Col style={styles.colInterviewDescription}>
                    <div className={styles.description}>
                        <p><strong>2 or 3 Things I Know About Her</strong></p>
                        <p><strong>我略知她一二 （1967）</strong></p>
                        <p><i>Jean-Luc Godard 让-吕克・戈达尔</i></p>
                        <p><i>France 法国</i></p>
                    </div>
                </Col>
            </Row>

            <Row style={[styles.row, styles.rowReview]}>
                <Col style={styles.colReviewDescription}>
                    <div className={styles.description}>
                        <p><strong>2 or 3 Things I Know About Her</strong></p>
                        <p><strong>我略知她一二 （1967）</strong></p>
                        <p><i>Jean-Luc Godard 让-吕克・戈达尔</i></p>
                        <p><i>France 法国</i></p>
                    </div>
                </Col>
                <Col style={styles.colInterview}>
                    <ImWrapper style={styles.imInterview}>
                        <BackgroundReview/>
                    </ImWrapper>
                    <ContentWrapper style={styles.content}>
                        <p className={`en lg button ` + styles.button}>
                            REVIEWS<br/>
                            <Button to="/">
                                <span className="zh">电影评论</span>
                                &rarr;
                            </Button>
                        </p>
                    </ContentWrapper>
                </Col>
            </Row>

        </Section>
    )
}

export default HomeReviews
