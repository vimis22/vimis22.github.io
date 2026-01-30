import React from 'react';
import NormalText from "../../../elements/NormalText.jsx";
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester5() {
    return (
        <div>
            <h1>Semester 5</h1>
            <section className={"semesterframe"}>
                <NormalText text="Semester 5" textsize="24px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px"/>
                <div>
                    <LinkBox text="Cyber Physical Systems" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                    <LinkBox text="Cybersecurity" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                </div>
            </section>
        </div>
    )
}