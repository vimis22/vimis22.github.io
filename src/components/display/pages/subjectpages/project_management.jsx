import React from 'react';
import LinkBox from "../../../elements/LinkBox.jsx";

export default function ProjectManagement() {
    return (
        <div className="main-content">
            <section className={"semesterframe"}>
                <h1>Project Management</h1>
                <div className="semester-linkbox-container">
                    <LinkBox text="Link to Notes & Exercises in Google Drive" textsize="16px" textcolor="black" textHeight="auto" textWidth="auto" textBorder="none" textBorderWeight="1px" containerHeight="auto" containerWidth="auto" containerBorder="none" containerBorderWeight="1px" backgroundColor="white" href={"https://drive.google.com/drive/folders/1nUpNDK53eouKTiEGzplhx7ZV6b3h0Pjy?usp=drive_link"}/>
                </div>
            </section>
        </div>
    )
}