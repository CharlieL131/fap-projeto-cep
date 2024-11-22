"use client"

import "./styles.css";

interface SendButtonProps {
    text: string;
}

export default function SendButton(props: SendButtonProps){
    return(
    <button className="button" type="submit">
        <span className="text barlow-regular" >{props.text}</span>
    </button>
    );
}