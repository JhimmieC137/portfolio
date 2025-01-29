"use client"

import AnimatedText from "@/components/components/AnimatedText";
import SubLayout from "@/components/components/SubLayout";
import Image from "next/image";
import profilePic from "../../../../public/tab_picture.jpg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/components/Skills";
import Experience from "@/components/components/Experience";
import Education from "@/components/components/Education";
import TransitionEffect from "@/components/components/TransitionEffect";

const AnimatedNumbers = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && Number(latest.toFixed(0)) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

export default function About() {
    return (
        <>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center">
                <SubLayout className="pt-16">
                    <AnimatedText text="The road to now" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 xl:col-span-4">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className="font-medium">
                                I completed my tertiary education in a region different from where I was raised, earning a degree that provided a strong foundation for my technical career. I really enjoy collaborating with diverse teams and always make it a point to learn new technologies to stay ahead. For me, 
                                it's not just about coding—I'm deeply committed to personal growth and love being part of meaningful projects that can make a real difference.
                            </p>
                            <p className="my-4 font-medium">
                            I’m an experienced backend and full-stack developer with a focus on optimizing system performance. At Distinct AI, I played a key role in developing APIs using FastAPI, improving efficiency and user engagement through rigorous code reviews.
                            I also contributed to Amal Outreach, building backend features for a medical app with Django Rest Framework
                            </p>
                            <p className="font-medium">
                            Earlier in my career, I completed a competitive internship at HNG, working on Java and Python projects while collaborating with designers. As IT Team Lead at Upfolio, I developed a Django-based website and managed HR processes. My internship at the African Languages Technology Initiative allowed me to work on machine learning models and build digital board games.

These experiences have helped me build a strong foundation in backend development, cloud technologies, and scalable systems. I’m passionate about innovation and aspire to contribute to meaningful projects that improve lives through technology.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={profilePic} 
                                alt='' 
                                className="w-full h-auto rounded-2xl" 
                                priority
                                sizes="(min-width: 808px) 50vw, 100vw"
                            />
                        </div>


                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={12}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied clients</h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={4}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">projects completed</h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={3}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">years of experience</h2>
                            </div>

                        </div>

                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </SubLayout>
            </main>
        </>
    );
};