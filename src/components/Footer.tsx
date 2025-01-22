import Link from "next/link";
import SubLayout from "./SubLayout";

export default function Footer() {
    return (
        <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base">
            <SubLayout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center lg:py-2">
                    <span className="text-yellow-500 text-2xl">&#128498;</span><Link href="/" className="">JhimmieC137</Link>
                </div>
                <Link href="/" className="underline underline-offset-2">Say hello</Link>
            </SubLayout>
        </footer>
    );
};