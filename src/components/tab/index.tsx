"use client";

import { motion } from "motion/react"
import { useRouter, usePathname } from "next/navigation";

import './styles.css';

interface TabProps {
    route: string,
    name: string,
    className?: string
}

export default function Tab(props: TabProps) { 
    const router = useRouter();
    const pathname = usePathname();
    const storage = globalThis?.sessionStorage;
    const isSelected = props.route === '/' ? pathname === props.route : pathname.startsWith(props.route);
    const wasSelected = storage ? ( props.route === '/' ? storage.getItem('prevPath') === props.route : (storage.getItem('prevPath') ? storage.getItem('prevPath')!.startsWith(props.route) : false) ) : false;

    
    console.log(`${props.route} -> ${wasSelected}`)

    function handleClick() {
        router.push(props.route);
    }
    
    return (
    <div onClick={handleClick} className={`wrapper ${props.className || ""}`}>

        <h6 className='name barlow-regular'>{props.name}</h6>
        <motion.div
            animate={{ 
                width: isSelected ? "100%" : "0%", 
            }}
            initial={wasSelected || isSelected ? { width: !isSelected ? "100%" : "0%"} : false}
            exit={{ width: !isSelected ? "100%" : "0%"}}
            transition={{ duration: 0.5 }}
            className='underline'
        ></motion.div>
    </div>
    );
}