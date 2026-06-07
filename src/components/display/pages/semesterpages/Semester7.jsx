import React from 'react';
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester7() {
    return (
        <div className="main-content">
            <section className={"semesterframe"}>
                <h1>Semester 7</h1>
                <div className="semester-linkbox-container">
                    <LinkBox text="Big Data" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/big_data"/>
                </div>
            </section>
        </div>
    )
}
