import "./globals.css";
import type {Metadata} from "next";
import {Cormorant_Garamond,Inter,Noto_Serif_Devanagari,Noto_Sans_Devanagari} from "next/font/google";
import {LangProvider} from "@/lib/i18n";import Navbar from "@/components/Navbar";import Footer from "@/components/Footer";
const sr=Cormorant_Garamond({subsets:["latin"],weight:["500","600"],variable:"--f-sr"});
const sn=Inter({subsets:["latin"],variable:"--f-sn"});
const hr=Noto_Serif_Devanagari({subsets:["devanagari"],weight:["500","600"],variable:"--f-hr"});
const hs=Noto_Sans_Devanagari({subsets:["devanagari"],weight:["400","500"],variable:"--f-hs"});
export const metadata:Metadata={title:"ASTRA — Vedic Astrology | वैदिक ज्योतिष",description:"Personalized Kundali, horoscope, puja and Vedic remedies. Ancient Wisdom. Personal Guidance. Brighter Tomorrow."};
export default function L({children}:{children:React.ReactNode}){return <html lang="en" className={`${sr.variable} ${sn.variable} ${hr.variable} ${hs.variable}`}><body><LangProvider><Navbar/><main>{children}</main><Footer/></LangProvider></body></html>}
