"use client"

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({
    position,
    company,
    companyLink,
    time,
    address,
    work
    }: {
        position: string
        company: string
        companyLink?: string
        time: string
        address: string
        work: string
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
                        {position}&nbsp;
                        <a
                            className="text-primary dark:text-primaryDark capitalize hover:underline"
                            href={companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @ {company}
                        </a>
                    </h3>
                    <span className="captalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                        {time} | {address}
                    </span>
                    <p className="font-medium w-full md:text-sm">
                        {work}
                    </p>
                </motion.div>
            </li>
        )
    }

export default function Experience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    );


    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl md:text-6xl xs:text-4xl mb-32 md:mb-16 w-full text-center">
                Experience
            </h2>
            <div ref={ref} className="w-[75%] lg:w-[90%] sm:w-full mx-auto relative">
                <motion.div
                    style={{
                        scaleY: scrollYProgress,
                    }}
                    className="absolute left-9 top-1.5 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details 
                        position="Full Stack Engineer"
                        company="DivVerse Labs"
                        companyLink="https://divverse.com/"
                        time="February, 2025 - Present"
                        address="Round Rock, TX"
                        work={`
                           Working as a full stack engineer at DivVerse Labs. I am responsible for developing and maintaining multiple apps and services.
                        `}
                    />
                    <Details 
                        position="Backend Engineer"
                        company="Distinct"
                        companyLink="https://distinct.ai"
                        time="October, 2023 - October, 2024"
                        address="Dover, Delaware"
                        work={`
                           Developed the backend system for a hiring management platform using FastAPI, building essential endpoints and services to handle data processing and business logic. 
                           Optimized system performance and ensured scalability while integrating third-party services for financial and mailing transactions. 
                           Additionally, collaborated with the front-end team, providing support in implementing UI components and resolving integration challenges to ensure a seamless user experience.
                        `}
                    />
                    <Details 
                        position="Backend Engineer"
                        company="Amal Outreach"
                        companyLink="https://amaloutreach.org/"
                        time="April, 2023 - May, 2023"
                        address="Oyo, Ibadan"
                        work={`
                            Designed and developed backend features for a medical mobile application using Django Rest Framework, 
                            creating essential endpoints to handle business logic and data processing. Ensured API efficiency, security, and 
                            scalability while integrating third-party services where needed to enhance functionality.
                        `}
                    />
                    <Details 
                        position="Backend Engineer"
                        company="HNG(Internship)"
                        companyLink="https://hng.tech/internship"
                        time="October, 2022 - December, 2022"
                        address="Lagos, Ikeja"
                        work={`
                            Successfully completed various development tasks throughout the internship, contributing to the progression from the initial stage 
                            to the final deployment. Collaborated with a multidisciplinary team of designers, engineers, illustrators, and product managers to develop Voxclips, 
                            an application that generates animated talking head videos for podcast audio. 
                            Played a key role in implementing dynamic, user-selected backgrounds, enhancing the overall customization and visual appeal of the generated videos.
                        `}
                    />
                    <Details 
                        position="IT Manager"
                        company="Upfolio"
                        companyLink="https://next-upfolio.vercel.app/"
                        time="May, 2021-Present"
                        address="Oyo, Ibadan"
                        work={`
                            As the Team Lead of the IT department, I played a pivotal role in driving the company's digital presence. 
                            I led the recruitment and onboarding process, efficiently coordinated tasks within the IT team, and took charge of the website’s operations. 
                            This included uploading key opportunities, developing dynamic forms for programs and projects, and ensuring the site’s smooth and engaging functionality.
                        `}
                    />
                    <Details 
                        position="Programming Intern"
                        company="African Language Technology Initiative"
                        companyLink="https://www.alt-i.org/"
                        time="2022-Present"
                        address="Oyo, Ibadan"
                        work={`
                            Created machine learning models in Python, using Numpy and Matplotlib to differentiate between leaves of different
                            trees with 90% accuracy. Built a terminal version of the African “AYO” board game with Python, and rebuilt the game, years later, to a more optimized
                            edition with Java.
                        `}
                    />

                </ul>
            </div>
        </div>
    );
};