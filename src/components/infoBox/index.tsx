"use client"
import React, {ReactNode} from "react";
import "./styles.css";

interface infoBoxProps{
    title: string;
    children: ReactNode;
}

export default function InfoBox(props: infoBoxProps){
    return(
        <div className="info-box">
            <h1 className="pageTitle cherry-swash-regular">{ props.title }</h1>
            { props.children }
        </div>
    )
}