"use client"
import "./styles.css";
import React, {ReactNode} from "react";

interface HeaderProps {
    children: ReactNode
} 

export default function Header(props: HeaderProps) {
    return (
        <header className="header">
            <nav>{props.children}</nav>
        </header>
    );
}