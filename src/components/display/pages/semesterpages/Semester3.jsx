import React from 'react';
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester3() {
    return (
        <div className="main-content">
            <section className={"semesterframe"}>
                <h1>Semester 3</h1>
                <div className="semester-linkbox-container">
                    <LinkBox text="Operative Systems and Distributed Systems" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/operative_systems"/>
                    <LinkBox text="Statistical Data Analysis" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/statistics"/>
                </div>
            </section>
        </div>
    )
}