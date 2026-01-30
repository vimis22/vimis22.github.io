import React from 'react';
import NormalText from "../../../elements/NormalText.jsx";
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester1() {
    return (
        <div className="main-content">
            <h1>Semester 1</h1>
            <section className={"semesterframe"}>
                <NormalText text="Semester 1" textsize="24px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px"/>
                <div>
                    <LinkBox text="Objectoriented Programming" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                    <LinkBox text="Computer Systems" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                    <LinkBox text="Mathematics" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                </div>
            </section>
        </div>
    )
}