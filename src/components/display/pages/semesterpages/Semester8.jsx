import React from 'react';
import LinkBox from "../../../elements/LinkBox.jsx";

export default function Semester8() {
    return (
        <div className="main-content">
            <section className={"semesterframe"}>
                <h1>Semester 8</h1>
                <div className="semester-linkbox-container">
                    <LinkBox text="Model-Based Software" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href="/subject/modelbased_software"/>
                </div>
            </section>
        </div>
    )
}
