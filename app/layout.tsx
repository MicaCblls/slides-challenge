import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "@/src/styles/globals.css";
import Navbar from "@/src/components/navbar";
import BackToTop from "@/public/assets/upArrow.svg";
import BackToTopMobile from "@/public/assets/upArrowMobile.svg";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
  weight: ["300", "400", "600"],
});
const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--lato-font",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Angela Smith",
  description: "Slides challenge developed by Micaela Ceballos",
  keywords: ["Slides", "React", "Typescript", "Next.js"],
  metadataBase: new URL("https://slides-challenge-iota.vercel.app/"),
  authors: [
    {
      name: "Micaela Ceballos",
      url: "https://slides-challenge-iota.vercel.app/",
    },
  ],
  icons: {
    icon: "/next.svg",
    shortcut: "/next.svg",
    apple: "/next.svg",
  },
  alternates: {
    canonical: "https://slides-challenge-iota.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lato.variable} h-full overflow-auto`}
    >
      <body className="w-full h-full flex flex-col overflow-auto font-inter">
        <Navbar />
        {children}
        <footer className="flex justify-center items-center pt-3 pb-5 sm:py-5">
          <Link href="/" aria-label="scroll to top">
            <BackToTop className="hidden sm:block" />
            <BackToTopMobile className="block sm:hidden" />
          </Link>
        </footer>
      </body>
    </html>
  );
}
