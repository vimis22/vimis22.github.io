import React from 'react';
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester6() {
    return (
        <div className="main-content">
            <section className={"semesterframe"}>
                <h1>Semester 6</h1>
                <div className="semester-linkbox-container">
                    <LinkBox text="Software Architecture" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/software_architecture"/>
                    <LinkBox text="Project Management" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/project_management"/>
                    <LinkBox text="Scientific Engineering Theorem" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/scientific_theory"/>
                </div>
            </section>
        </div>
    )
}