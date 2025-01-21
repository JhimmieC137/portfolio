import SubLayout from "../../components/SubLayout";
import Image from "next/image";
import profilePic from '../../../public/images/profile/developer-pic-1.png';
import AnimatedText from "../../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/components/Icons";
import HireMe from "@/components/components/HireMe";
import lightBulb from "../../../public/images/svgs/miscellaneous_icons_1.svg"

export default function Home() {
  return (
    <div className="flex items-center text-dark dark:text-light w-full min-h-screen">
      <SubLayout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={profilePic} alt="Jimi" className='w-full h-auto'  />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left"/>
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link 
                href="/dummy.pdf" target={"_blank"}
                download={true}
                className={`flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light 
                  hover:text-dark hover:dark:text-light hover:dark:bg-dark border border-solid border-transparent hover:border-dark hover:dark:border-light dark:bg-light dark:text-dark
                `}
              >
                Resume<LinkArrow className="w-6 ml-1" />
              </Link>
              <Link href="mailto:abc@gmail"
                className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline"
              >Contact</Link>
            </div>
          </div>
        </div>
      </SubLayout>

      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image src={lightBulb} alt='jimi' className="w-full h-auto"/>
      </div>
    </div>
  );
}
