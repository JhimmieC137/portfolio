"use client"

import Image from "next/image";
import CircleTextBlack from "../../public/images/circle_text_black_2.png"
import CircleTextWhite from "../../public/images/circle_text_white.png"
import Link from "next/link";
// import UseThemeSwitcher from "../hooks/useTheme";
import { CircularText } from "./Icons";
import { useTheme } from "../hooks/useTheme";

export default function HireMe() {
    const {theme, setTheme} = useTheme();
    console.log(theme)

    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
            <div className="w-48 h-auto flex items-center justify-center relative">
                <CircularText className={`fill-dark dark:fill-light animate-spin-slow origin-center`}/>
                <Link
                    href="mailto:toluwalope.david@gmail.com"
                    className={`flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                        bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark dark:border-light w-24 h-24 rounded-full font-semibold 
                        hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light`}
                >
                    Hire me
                </Link>
            </div>
        </div>
    );
};