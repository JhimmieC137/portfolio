import SubLayout from "../../components/SubLayout";
import Image from "next/image";
import profilePic from '../../../public/images/profile/developer-pic-1.png';
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
            <div className="w-1/2 md:w-full">
              <Image 
                src={profilePic}
                alt="Jimi"
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              />
            </div>
            <div className="w-1/2 lg:w-full lg:text-center flex flex-col items-center self-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/>
              <p className="my-4 text-base md:text-sm sm:text-sm font-medium">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="flex items-center self-start lg:self-center mt-2">
                <Link 
                  href="/dummy.pdf" target={"_blank"}
                  download={true}
                  className={`flex items-center bg-dark text-light p-2.5 px-6 md:p-2 md:px-4 rounded-lg text-lg md:text-base font-semibold hover:bg-light 
                    hover:text-dark hover:dark:text-light hover:dark:bg-dark border border-solid border-transparent hover:border-dark 
                    hover:dark:border-light dark:bg-light dark:text-dark
                  `}
                >
                  Resume<LinkArrow className="w-6 ml-1" />
                </Link>
                <Link href="mailto:abc@gmail"
                  className="ml-4 text-lg md:text-base font-medium capitalize text-dark dark:text-light underline"
                >Contact</Link>
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
