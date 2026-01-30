import React from 'react';
import NormalText from "../../../elements/NormalText.jsx";
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester4() {
    return (
        <div className="main-content">
            <h1>Semester 4</h1>
            <section className={"semesterframe"}>
                <NormalText text="Semester 4" textsize="24px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px"/>
                <div>
                    <LinkBox text="Artificial Intelligence" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                    <LinkBox text="Discrete Mathematics" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                    <LinkBox text="Algorithms & Datastructures" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white"/>
                </div>
            </section>
        </div>
    )
}