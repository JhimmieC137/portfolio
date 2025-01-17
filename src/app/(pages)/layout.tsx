import Footer from "@/components/components/Footer";
import NavBar from "@/components/components/NavBar";

export default function MainLayout({ children } : { children: React.ReactNode }) {
    return (
        <main className="bg-light text-black w-full min-h-screen">
            <NavBar />
            {children}
            <Footer />
        </main>
    )
}