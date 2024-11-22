"use client"

import "./styles.css";

interface inputBoxProps{
    placeholder: string;
    name: string;
}

export default function InputBox(props: inputBoxProps){
    return(
        <input name={props.name} className="box" placeholder= {props.placeholder} type="text"></input>
    )
}