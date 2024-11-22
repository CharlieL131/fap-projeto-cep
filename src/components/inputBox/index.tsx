"use client"

import "./styles.css";

interface inputBoxProps{
    placeholder: string;
    name: string;
    required?: boolean;
}

export default function InputBox(props: inputBoxProps){
    return(
        <input name={props.name} className="box" placeholder= {props.placeholder} type="text" required={props.required || false}></input>
    )
}