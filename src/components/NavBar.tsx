"use client"

import Link from "next/link";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import { GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, XIcon } from "./Icons";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
// import UseThemeSwitcher from "../hooks/useThemeSwitcher";

const navLinks = [
    {
        link: '/',
        name: 'Home',
        style: 'mr-4',
    },
    {
        link: '/about',
        name: 'About',
        style: 'mx-4',
    },
    {
        link: '/projects',
        name: 'Projects',
        style: 'mx-4',
    },
    // {
    //     link: '/articles',
    //     name: 'Articles',
    //     style: 'ml-4',
    // },
]

const socialLinks = [
    {
        link: '/',
        name: 'Twitter',
        tag: <XIcon />
    },
    {
        link: '/',
        name: 'Github',
        tag: <GithubIcon />,
    },
    {
        link: '/',
        name: 'Linkedin',
        tag: <LinkedInIcon />,
    },
    {
        link: '/',
        name: 'Pinterest',
        tag: <PinterestIcon />,
    },
]

const CustomMobileLink = ({ 
    href, 
    title, 
    className="",
    toggle,
    }: { 
        href: string, 
        title: string, 
        className?: string,
        toggle: () => void
    }) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    }

    return (
        <button
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleClick}
        >
            {title}

            <span className={`
                h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full 
                transition-[width] ease duration-300 ${pathname === href ? "w-full" : "w-0"}
                dark:bg-dark 
            `}>&nbsp;</span>
        </button>
    )
}

const CustomLink = ({ 
    href, 
    title, 
    className="",
    }: { 
        href: string, 
        title: string, 
        className?: string
    }) => {
    const pathname = usePathname();

    return (
        <Link
            className={`${className} relative group`}
            href={href}
        >
            {title}
            <span className={`
                h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full 
                transition-[width] ease duration-300 ${pathname === href ? "w-full" : "w-0"}
                dark:bg-light
            `}>&nbsp;</span>
        </Link>
    )
}

export default function NavBar() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header
            className="relative w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light z-10 lg:px-16 md:px-12 sm:px-8"
        >

            <button 
                onClick={handleClick} 
                className="hidden lg:flex flex-col justify-center items-center"
            >
                <span className={`
                    ${ isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }
                    bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                `}></span>
                <span className={`
                    ${ isOpen ? 'opacity-0' : 'opacity-100' }
                    bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5
                `}></span>
                <span className={`
                    ${ isOpen ? '-rotate-45 -translate-y-1 ' : 'translate-y-0.5' }
                    bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm
                `}></span>
            </button>

            
            <div 
                className="w-full flex justify-between items-center lg:hidden"
            >
                <nav>
                    {
                        navLinks.map((el, index) => (
                            <CustomLink key={index} href={el.link} title={el.name} className={el.style}/>
                        ))
                    }
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    {
                        socialLinks.map((el, index) => (
                            <motion.a 
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className={`w-6 mr-3.5 
                                    ${ el.name === 'Pinterest' && 'h-6 pl-1 pt-1 bg-dark fill-light dark:fill-dark dark:bg-light rounded-full'} 
                                    ${ el.name === 'Twitter' && 'fill-dark dark:fill-light'} 
                                    ${ el.name === 'Linkedin' && 'fill-dark dark:fill-light'} 
                                    `}
                                key={index}
                                href={el.link} 
                                target="_blank"
                            >{el.tag}</motion.a>
                        ))
                    }

                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className={`ml-3 flex items-center justify-center rounded-full p-1
                            ${theme === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'}
                        `}
                    >
                        {
                            theme === "dark"
                                ? <SunIcon className={"fill-dark"} />
                                : <MoonIcon className={"fill-dark"} />

                        }
                    </button>

                </nav>
            </div>

            
            {/* Mobile Nav */}
            <>
                <div
                    onClick={() => setIsOpen(false)}
                    className={`${ isOpen && 'lg:fixed lg:inset-0'} bg-none z-20`}
                />
                <div className={`
                    ${isOpen && 'fixed lg:flex'} hidden
                    min-w-[70vw] flex-col justify-between items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    z-40 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
                `}>
                    <nav className="flex items-center flex-col justify-center mb-5">
                        {
                            navLinks.map((el, index) => (
                                <CustomMobileLink key={index} href={el.link} title={el.name} toggle={handleClick}/>
                            ))
                        }
                    </nav>
                    
                    <nav className="flex items-center justify-center flex-wrap">
                        {
                            socialLinks.map((el, index) => (
                                <motion.a 
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-6 mr-3.5 
                                        ${ el.name === 'Pinterest' && 'h-6 pl-1 pt-1 bg-light border-[1.7px] border-solid border-dark fill-dark dark:fill-dark dark:bg-transparent rounded-full'}   
                                        ${ el.name === 'Github' && 'bg-light dark:bg-dark rounded-full'  }  
                                        ${ el.name === 'Twitter' && 'fill-light dark:fill-dark'}
                                        ${ el.name === 'Linkedin' && 'fill-light dark:fill-dark'}`}
                                    key={index}
                                    href={el.link} 
                                    target="_blank"
                                >{el.tag}</motion.a>
                            ))
                        }

                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className={`ml-3 flex items-center justify-center rounded-full p-1
                                ${theme === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'}
                            `}
                        >
                            {
                                theme === "dark"
                                    ? <SunIcon className={"fill-dark"} />
                                    : <MoonIcon className={"fill-dark"} />

                            }
                        </button>

                    </nav>
                </div>
            </>
            {/* End of Mobile Nav */}
            


            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};