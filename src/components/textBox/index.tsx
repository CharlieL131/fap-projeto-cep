"use client"

import "./styles.css";

interface textBoxProps {
    text: string;
}

export default function TextBox(props: textBoxProps){
    return(
        <div className="box">
            <span className="text barlow-regular">{props.text}</span>
        </div>
    );
}