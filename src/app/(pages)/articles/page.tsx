"use client"

import AnimatedText from "@/components/components/AnimatedText";
import SubLayout from "@/components/components/SubLayout";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import article1 from "../../../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../../../public/images/articles/create loading screen in react js.jpg"
import { motion, useMotionValue } from "framer-motion";
import article3 from "../../../../public/images/articles/form validation in reactjs using custom react hook.png";
import { useRef } from "react";
import TransitionEffect from "@/components/components/TransitionEffect";

const FramerImage = motion.create(Image);

const MovingImg = ({
    title,
    img,
    link,
    }: {
        title: string;
        img: StaticImageData;
        link: string;
    }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef<HTMLImageElement | null>(null);

    function handleMouse(event: React.MouseEvent) {
        if (imgRef.current) {
            imgRef.current.style.display="inline-block";
            x.set(event.pageX);
            y.set(-10);
        }
    }

    function handleMouseLeave() {
        if (imgRef.current) {
            imgRef.current.style.display="none"
            x.set(0);
            y.set(0);
        }
    }

    return (
        <Link 
            href={link}
            target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline">
                {title}
            </h2>
            <FramerImage 
                style={{
                    x: x,
                    y: y
                }}
                initial={{opacity: 0}}
                whileInView={{
                    opacity: 1,
                    transition: {duration: 0.3}
                }}
                ref={imgRef}
                src={img}
                alt={title}
                className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
            />
        </Link>
    )
};

const Article = ({
    img,
    title,
    date,
    link,
    }: {
        img: StaticImageData;
        title: string;
        date: string;
        link: string;
    }) => {
    return (
        <motion.li
            initial={{y:200}}
            whileInView={{
                y: 0,
                transition: {duration: 0.3, ease: "easeInOut"},
            }}
            viewport={{once: true}}
            className="
                relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between 
                bg-light text-dark dark:bg-dark dark:text-light first:mt-0 
                border border-solid border-dark dark:border-light border-r-4 border-b-4
                sm:flex-col"
            >
            <MovingImg title={title} img={img} link={link} />
            <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:pl-0 xs:text-sm sm:self-start">{date}</span>
        </motion.li>
    );
}


const FeaturedArticle = ({
    img,
    title,
    time,
    summary,
    link }: { 
        img: StaticImageData,
        title: string,
        time: string,
        summary: string,
        link: string,
    }) => {
    return (
        <li className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
            <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
                <FramerImage 
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        50vw"
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
        </li>
    )
}

export default function Articles() {
    return (
        <>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <SubLayout className="pt-16">
                    <AnimatedText 
                        text="Words Can Change The World!" 
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1">
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            img={article1}
                            link="/"
                        />
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            img={article2}
                            link="/"
                        />
                    </ul> 

                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
                    <ul>
                        <Article 
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2025"
                            img={article3}
                            link="/"
                        />
                        <Article 
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2025"
                            img={article3}
                            link="/"
                        />
                        <Article 
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2025"
                            img={article3}
                            link="/"
                        />
                        <Article 
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2025"
                            img={article3}
                            link="/"
                        />
                        <Article 
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2025"
                            img={article3}
                            link="/"
                        />
                    </ul>
                </SubLayout>
            </main>
        </>
    );
};