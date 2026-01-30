import React from 'react';
import NormalText from "../../../elements/NormalText.jsx";
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester6() {
    return (
        <div className="main-content">
            <h1>Semester 6</h1>
            <section className={"semesterframe"}>
                <NormalText text="Semester 6" textsize="24px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px"/>
                <div>
                    <LinkBox text="Software Architecture" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                    <LinkBox text="Project Management" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                    <LinkBox text="Scientific Engineering Theorem" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                </div>
            </section>
        </div>
    )
}