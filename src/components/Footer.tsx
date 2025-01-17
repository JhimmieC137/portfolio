import Link from "next/link";
import SubLayout from "./SubLayout";

export default function Footer() {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
            <SubLayout className="py-8 flex items-center justify-between">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div>
                    <span className="text-yellow-500 text-2xl">&#128498;</span><Link href="/" className="">JhimmieC137</Link>
                </div>
                <Link href="/" className="underline underline-offset-2">Say hello</Link>
            </SubLayout>
        </footer>
    );
};