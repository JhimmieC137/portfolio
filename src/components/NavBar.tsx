"use client"

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

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
        tag: <TwitterIcon  />
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
                `}>&nbsp;</span>
            </Link>
        )
    }

export default function NavBar() {

    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between"
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
                            className="w-6 mr-3.5"
                            key={index}
                            href={el.link} 
                            target="_blank"
                        >{el.tag}</motion.a>
                    ))
                }
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};