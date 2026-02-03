"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
    const pathname = usePathname()
    const nonWhiteHeaderPaths = ["/", "meeting"]
    return (
        <>
            {!nonWhiteHeaderPaths.includes(pathname) && <Header bgColor="white" user={true}  />}
            {children}
            <Footer />
        </>
    );
}
