import React from 'react';

export default function NormalText(props) {
    return (
        <div style={{height: props.containerHeight, width: props.containerWidth, border: `${props.containerBorderWeight} ${props.containerBorder}`}}>
            <p style={{fontSize: props.textsize, color: props.textcolor, height: props.textHeight, width: props.textWidth, border: `${props.textBorderWeight} ${props.textBorder}`}}>
                {props.text}
            </p>
        </div>
    )
}