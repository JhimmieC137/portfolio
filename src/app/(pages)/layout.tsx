import Footer from "@/components/components/Footer";
import NavBar from "@/components/components/NavBar";

export default function MainLayout({ children } : { children: React.ReactNode }) {
    return (
        <main className="bg-light dark:bg-dark text-dark dark:text-light w-full min-h-screen max-w-[2100px] mx-auto">
            <NavBar />
                {children}
            <Footer />
        </main>
    )
}