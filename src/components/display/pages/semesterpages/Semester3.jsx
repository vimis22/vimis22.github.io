import React from 'react';
import NormalText from "../../../elements/NormalText.jsx";
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester3() {
    return (
        <div className="main-content">
            <h1>Semester 3</h1>
            <section className={"semesterframe"}>
                <NormalText text="Semester 3" textsize="24px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px"/>
                <div>
                    <LinkBox text="Operative Systems and Distributed Systems" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                    <LinkBox text="Statistical Data Analysis" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                </div>
            </section>
        </div>
    )
}