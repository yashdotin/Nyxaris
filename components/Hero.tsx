"use client";
import {motion} from "framer-motion";import Link from "next/link";import {ArrowRight,Sparkles,Sun,Flame,Compass} from "lucide-react";import {useT} from "@/lib/i18n";
const ic=[Sparkles,Sun,Flame,Compass],hr=["/kundali","/services","/puja","/contact"];
export default function Hero(){const {t}=useT();
const up=(d:number)=>({initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:d}});
return <section className="relative bg-ivory md:flex md:min-h-screen md:items-center">
<div className="relative h-[46vh] bg-cover bg-center pt-16 md:absolute md:inset-0 md:h-full md:pt-0" style={{backgroundImage:"url(/poster.jpg)"}}>
<video className="h-full w-full object-cover object-[68%_30%] motion-reduce:hidden md:object-right" src="/hero.mp4" poster="/poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-hidden/>
<div className="absolute inset-0 hidden bg-gradient-to-r from-ivory/90 via-ivory/40 to-transparent md:block"/>
<div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ivory to-transparent md:hidden"/></div>
<div className="relative z-10 px-6 pb-12 md:max-w-2xl md:px-16 md:pb-0 md:pt-24">
<motion.p {...up(.1)} className="text-[11px] tracking-[.18em] text-gold">{t.eyebrow}</motion.p>
<motion.h1 {...up(.2)} className="mt-4 font-serif text-5xl leading-[1.05] text-navy md:text-7xl">{t.h1[0]}<br/>{t.h1[1]} <span className="text-gold">{t.h1[2]}</span></motion.h1>
<motion.p {...up(.3)} className="mt-5 max-w-md text-navy/80">{t.desc}</motion.p>
<motion.div {...up(.4)} className="mt-7 flex flex-col gap-3 sm:flex-row">
<Link href="/kundali" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-saffron px-7 py-3.5 font-medium text-white shadow-lg transition hover:-translate-y-0.5">{t.cta1}<ArrowRight size={18}/></Link>
<Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-gold bg-ivory/60 px-7 py-3.5 text-navy transition hover:-translate-y-0.5">{t.cta2}</Link></motion.div>
<div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">{ic.map((I,i)=><motion.div key={i} {...up(.55+i*.1)}><Link href={hr[i]} className="group flex flex-col items-center gap-2 text-center text-xs text-navy"><span className="grid h-14 w-14 place-items-center rounded-full border border-gold bg-ivory/70 text-gold transition group-hover:scale-110 group-hover:bg-gold group-hover:text-white"><I size={22}/></span>{t.feats[i]}</Link></motion.div>)}</div>
</div></section>}
