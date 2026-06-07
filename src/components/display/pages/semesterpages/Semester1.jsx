import React from 'react';
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester1() {
    return (
        <div className="main-content">
            <section className={"semesterframe"}>
                <h1>Semester 1</h1>
                <div className="semester-linkbox-container">
                    <LinkBox text="Objectoriented Programming" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/object_programming"/>
                    <LinkBox text="Computer Systems" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/computersystems"/>
                    <LinkBox text="Mathematics" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/mathematics"/>
                </div>
            </section>
        </div>
    )
}