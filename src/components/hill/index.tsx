import Image from "next/image";
import "./styles.css"

export default function Hill() {
    return (
        <footer className="wrapper-hill">
            <Image alt="" src={"/hill.svg"} width={1920} height={425} className="hill"></Image>
        </footer>
    )
}