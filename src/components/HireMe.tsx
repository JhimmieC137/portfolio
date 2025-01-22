"use client"

import Link from "next/link";
import { CircularText } from "./Icons";
import { useTheme } from "../hooks/useTheme";

export default function HireMe() {
    const { theme } = useTheme();
    console.log(theme)

    return (
        <div className="
            fixed md:absolute left-4 bottom-4 flex items-center justify-center 
            overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:z-10
            sm:right-0 "
        >
            <div className="w-48 md:w-24 h-auto flex items-center justify-center relative">
                <CircularText className={`fill-dark dark:fill-light animate-spin-slow origin-center`}/>
                <Link
                    href="mailto:toluwalope.david@gmail.com"
                    className={`flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                        bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark dark:border-light w-24 h-24 rounded-full font-semibold 
                        hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light md:w-14 md:h-14 md:text-[10px] 
                        
                    `}
                >
                    Hire me
                </Link>
            </div>
        </div>
    );
};