"use client"

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, XIcon } from "./Icons";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
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
    {
        link: '/articles',
        name: 'Articles',
        style: 'ml-4',
    },
]

const socialLinks = [
    {
        link: '/',
        name: 'Twitter',
        tag: <XIcon className='fill-dark dark:fill-light'/>
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

    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light"
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
                            className={`w-6 mr-3.5 ${ el.name === 'Pinterest' && 'dark:bg-light rounded-full'}`}
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

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};