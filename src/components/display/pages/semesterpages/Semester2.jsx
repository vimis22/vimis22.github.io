import React from 'react';
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester2() {
    return (
        <div className="main-content">
            <section className={"semesterframe"}>
                <h1>Semester 2</h1>
                <div className="semester-linkbox-container">
                    <LinkBox text="Advanced Objectoriented Programming" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/advanced_programming"/>
                    <LinkBox text="Data Management" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/data_management"/>
                </div>
            </section>
        </div>
    )
}