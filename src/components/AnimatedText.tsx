"use client"

import { motion } from "framer-motion";

const quote = {
    initial: {
        opacity:1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const singleWord = {
    initial: {
        opacity:0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1, 
        }
    }
}

export default function AnimatedText({ text, className="" }: { text: string, className?: string }) {
    return (
        <div className={`
            w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0
        `}
        >
            <motion.h1
                className={`
                    inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}
                `}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {
                    text.split(' ').map((char, index) => 
                    <motion.span key={char + '-' + index} className="inline-block"
                        variants={singleWord}
                    >
                        {char}&nbsp;
                    </motion.span>
                    )
                }
            </motion.h1>
        </div>        
    );
};