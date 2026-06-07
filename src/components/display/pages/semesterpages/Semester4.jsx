import React from 'react';
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester4() {
    return (
        <div className="main-content">
            <section className={"semesterframe"}>
                <h1>Semester 4</h1>
                <div className="semester-linkbox-container">
                    <LinkBox text="Artificial Intelligence" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/artificial_intelligence"/>
                    <LinkBox text="Discrete Mathematics" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/discrete_mathematics"/>
                    <LinkBox text="Algorithms & Datastructures" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/algorithms_datastructures"/>
                </div>
            </section>
        </div>
    )
}