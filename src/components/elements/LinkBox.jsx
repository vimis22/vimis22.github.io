import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkBox(props) {
    if (props.href) {
        const isExternal = props.href.startsWith('http');
        if (isExternal) {
            return (
                <a className="subject" href={props.href} target="_blank" rel="noreferrer">
                    {props.text}
                </a>
            );
        }
        return (
            <Link className="subject" to={props.href}>
                {props.text}
            </Link>
        );
    }
    return (
        <div className="subject">
            {props.text}
        </div>
    );
}
