import React from 'react';

interface LinkBoxProps {
    text: string;
    textsize: any;
    textcolor: string;
    textHeight: any;
    textWidth: any;
    textBorder: string;
    textBorderWeight: string;
    containerHeight: any;
    containerWidth: any;
    containerBorder: string;
    containerBorderWeight: string:
    backgroundColor: string;
    link: string;
}

export default function LinkBox(props) {
    return (
        <div style={{backgroundColor: props.backgroundColor,
                    height: props.containerHeight, width: props.containerWidth, border: props.containerBorder
        }}>
            <p style={{fontSize: props.textsize, color: props.textcolor, height: textHeight, width: props.textWidth, border: props.textBorder, link: props.link}}>
                {props.text}
            </p>
        </div>
    )
}