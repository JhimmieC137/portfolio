import Footer from "@/components/components/Footer";
import NavBar from "@/components/components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jimi",
    authors: [{
        name: "David Olujim", 
        url: "https://jimi.xyz",
    }],
    icons: ["/j_logo_2.png"],
    keywords: "Eathora, AI, Medical Care, MedicalAI",
    description: "My name is David Olujimi, Jimi(Yoruba) or Jhimmie(English), if you will. I'm a software engineer and a passionate developer. Feel free to reach out to me, let's build something extraodinary",
};
  

export default function MainLayout({ children } : { children: React.ReactNode }) {
    return (
        <main className="bg-light dark:bg-dark text-dark dark:text-light w-full min-h-screen max-w-[2100px] mx-auto">
            <NavBar />
                {children}
            <Footer />
        </main>
    )
}