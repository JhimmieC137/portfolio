import SubLayout from "../../components/SubLayout";
import Image from "next/image";
import profilePic from '../../../public/catoon_jimi_transparent.png';
import AnimatedText from "../../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/components/Icons";
import HireMe from "@/components/components/HireMe";
import lightBulb from "../../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from "@/components/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen 2xl:">
        <SubLayout className="pt-0 xl:pt-0 lg:pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-[35%] md:w-full">
              <Image 
                src={profilePic}
                alt="Jimi"
                className='w-full h-auto lg:hidden md:inline-block md:w-full rounded-full bg-primary dark:bg-primaryDark'
                priority
                sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              />
            </div>
            <div className="w-1/2 lg:w-full lg:text-center flex flex-col items-center self-center">
              <AnimatedText text="Hi, I'm Olujimi David" className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/>
              <p className="my-4 text-base md:text-sm sm:text-sm font-medium">
                An experienced developer with expertise in designing and implementing user-friendly, efficient, scalable applications with languages such as Python, JavaScript, and Java. 
                I'm always driven to bring extraodinary ideas to reality. Let's work together to create something amazing.
              </p>
              <div className="flex items-center self-start lg:self-center mt-2">
                <Link 
                  href="/OLUJIMI_DAVID.pdf" target={"_blank"}
                  download={true}
                  className={`flex items-center bg-dark text-light p-2.5 px-6 md:p-2 md:px-4 rounded-lg text-lg md:text-base font-semibold hover:bg-light 
                    hover:text-dark hover:dark:text-light hover:dark:bg-dark border border-solid border-transparent hover:border-dark 
                    hover:dark:border-light dark:bg-light dark:text-dark
                  `}
                >
                  Resume<LinkArrow className="w-6 ml-1" />
                </Link>
                <a href="mailto:toluwalope.david@gmail.com"
                  className="ml-4 text-lg md:text-base font-medium capitalize text-dark dark:text-light underline"
                >Contact</a>
              </div>
            </div>
          </div>
        </SubLayout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image
            src={lightBulb}
            alt='idea-bulb'
            className="w-full h-auto md:hidden"
            priority
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
        </div>
      </main>
    </>
  );
}
