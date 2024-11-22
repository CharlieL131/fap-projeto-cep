"use client"
import "./styles.css"

interface DiplayProps {
    title: string;
    value: string;
}

export default function Display(props: DiplayProps) {
    return (
        <div className="display-box barlow-regular">
            <div className="text-wrapper">{props.title}</div>

            <div className="value-container">
                {props.value}
            </div>
        </div>
    )
}