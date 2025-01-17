import Image from "next/image";
import CircleText from "../../public/images/circle_text_black_2.png"
import { CircularText } from "./Icons";
import Link from "next/link";

export default function HireMe() {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
            <div className="w-48 h-auto flex items-center justify-center relative">
                <Image src={CircleText} alt='circular-text' className="fill-light w-[20em] animate-spin-slow " />
                <Link 
                    href="mailto:toluwalope.david@gmail.com" 
                    className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                        bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold 
                        hover:bg-light hover:text-dark "
                >
                    Hire me
                </Link>
            </div>
        </div>
    );
};