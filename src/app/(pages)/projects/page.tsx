"use client"

import AnimatedText from "@/components/components/AnimatedText";
import { GithubIcon } from "@/components/components/Icons";
import SubLayout from "@/components/components/SubLayout";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import eathora from "../../../../public/images/projects/eathora-landing-page.png"
import upfolio from "../../../../public/images/projects/upfolio.png"
import laundromat from "../../../../public/images/projects/laundromat-admin.png"
import jtdAdvisors from "../../../../public/images/projects/jtd-advisors.png"
import paystackDemo from "../../../../public/images/projects/paystack-demo.png"
import { motion } from "framer-motion";
import TransitionEffect from "@/components/components/TransitionEffect";

const FramerImage = motion.create(Image);

const FeaturedProject = ({
    type,
    title,
    summary,
    img,
    link,
    github}: {
        type: string,
        title: string,
        summary: string,
        img: StaticImageData,
        link: string,
        github: string,
    }) => {
    return (
        <article className="
            w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />                            
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full border border-black dark:border-none">
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

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-6">
                <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>

                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        {" "}
                        <GithubIcon />{" "}
                    </Link>
                    <Link 
                        href={link}
                        target="_blank"
                        className="
                            ml-4 rounded-lg bg-dark text-light border border-solid border-transparent hover:border-dark hover:bg-light 
                            hover:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light dark:text-dark dark:bg-light 
                            p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base
                        "
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
}


const Project = ({type,
    title,
    img,
    link,
    summary,
    github}: {
        type: string,
        title: string,
        img: StaticImageData,
        link: string,
        summary?: string,
        github: string,
    }) => {
    return (
        <article className="w-full relative flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 dark:bg-dark dark:border-light xs:p-4">
            
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"  />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg border border-black dark:border-none">
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

            <div className="w-full flex flex-col items-start justify-between mt-4">
                {/* <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span> */}
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl lg:text-2xl font-bold dark:text-light">{title}</h2>
                </Link>

                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>

                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6">
                        {" "}
                        <GithubIcon />{" "}
                    </Link>
                </div>
            </div>
        </article>
    )
}


export default function Projects() {
    return(
        <>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center">  
                <SubLayout className="pt-16">
                    <AnimatedText 
                        text="Ideas Ignite Change" 
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Eathora"
                                img={eathora}
                                summary="
                                    An easy-to-use app for Nigerians to access fast reliable health assessments, consultaions and medical support, right from a mobile phone, ensuring you get the care you need when you need it.
                                    This is app is an informative landing page for users to join the waitlist."
                                link="https://eathora.com"
                                github="https://github.com/JhimmieC137/eathora-landing-page"
                                type="Featured Project"

                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="Upfolio"
                                img={upfolio}
                                summary="The digital home of Upfolio, a dynamic, youth-led nonprofit dedicated to empowering African youths. Focused on personal and professional growth, this platform connects 
                                        young minds with opportunities, and resources to drive meaningful development."  
                                link="https://next-upfolio.vercel.app/"
                                github="https://github.com/JhimmieC137/Next_Upfolio"
                                type="Featured Project"

                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="Laundromat Admin Dashboard"
                                img={laundromat}
                                summary="A sleek and intuitive admin dashboard designed for a proposed laundry service platform. 
                                    This frontend app streamlines order management, tracks logistics, and many more admin restricted features 
                                    to make the management seamless."
                                link="https://admin-dashboard-sand-nine.vercel.app/auth/login"
                                github="https://github.com/Laundromart-service/admin-dashboard"
                                type="Featured Project"

                            />
                        </div>


                        <div className="col-span-12">
                            <FeaturedProject 
                                title="JTD Advisors"
                                img={jtdAdvisors}
                                summary="
                                    This app is the offical website of JTD Advisors, providing a seamless medium to browse and pay for services
                                    provided by the company. JTD Advisors was founded to bridge the gap between Nigerian students and world-class education opportunities abroad.
                                    Through personalized one-on-one counseling and consultancy sessions, families and individuals gained clarity on study options,
                                    scholarships, and application strategies.
                                "
                                link="https://jtd-advisors.vercel.app/"
                                github="https://github.com/JhimmieC137/jtd-frontend"
                                type="Featured Project"

                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="Paystack Demo App"
                                img={paystackDemo}
                                summary="A sleek Single Page Application (SPA) showcasing seamless integrations with Paystack's API. This project highlights key payment functionalities, 
                                    demonstrating secure transactions, authentication flows, and real-time processing in action."
                                link="https://paystack-demo-1yde.onrender.com"
                                github="https://github.com/JhimmieC137/paystack-api-integration-test"
                                type="Featured Project"

                            />
                        </div>
                    </div>
                </SubLayout>
            </main>
        </>
    );
};