import React from 'react';
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester5() {
    return (
        <div className="main-content">
            <section className={"semesterframe"}>
                <h1>Semester 5</h1>
                <div className="semester-linkbox-container">
                    <LinkBox text="Cyber Physical Systems" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                    <LinkBox text="Cybersecurity" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                </div>
            </section>
        </div>
    )
}