"use client"

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({
    type,
    time,
    place,
    info,
    link
    }: {
        type: string
        time: string
        place: string
        info: string
        link: string
    }) => {
        const ref = useRef<HTMLLIElement>(null);
        return (
            <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between">
                
                <LiIcon reference={ref}/>
                <motion.div
                    initial={{y:50}}
                    whileInView={{y:0}}
                    transition={{duration:0.5, type:"spring"}}
                >
                    <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                        {type}
                    </h3>
                    <span className="captalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
                        {time}{' '}
                        <a
                            className="text-primary dark:text-primaryDark capitalize hover:underline"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @ {' '}{place}
                        </a>
                    </span>
                    <p className="font-medium w-full md:text-sm">
                        {info}
                    </p>
                </motion.div>
            </li>
        )
    }

export default function Education() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    );


    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl md:text-6xl xs:text-4xl md:mb-16 mb-32 w-full text-center">
                Education
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] sm:w-full">
                <motion.div
                    style={{
                        scaleY: scrollYProgress,
                    }}
                    className="absolute left-9 top-1.5 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details 
                        type="Bachelor Of Engineering In Civil Engineering"
                        time="August, 2016 - September, 2021"
                        place="Federal University of Technology, Minna."
                        link="https://futminna.edu.ng/"
                        info="Designing, building, and maintaining the infrastructure that keeps society running—roads, bridges, buildings, and water systems. It blends math, physics, and materials science to create sustainable and efficient solutions for everyday challenges."
                    />
                    <Details 
                        type="Fullstack Web Development Nanodegree "
                        time="August, 2022 - October, 2022"
                        place="Udacity"
                        link="https://www.udacity.com/"
                        info="Completed tasks and tests that improved my skils with tools and increased my understanding of the technical know hows of fullstack development"
                    />
                </ul>
            </div>
        </div>
    );
};