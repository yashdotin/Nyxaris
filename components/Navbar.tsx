"use client";
import Link from "next/link";import {usePathname,useRouter} from "next/navigation";import {useEffect,useState} from "react";
import {AnimatePresence,motion} from "framer-motion";import {Calendar,Menu,Search,X,Flower2} from "lucide-react";import {useT} from "@/lib/i18n";
export const hrefs=["/","/kundali","/services","/puja","/about","/contact"];
export default function Navbar(){
const {t,lang,setLang}=useT();const p=usePathname();const r=useRouter();
const [sc,setSc]=useState(false),[open,setOpen]=useState(false),[q,setQ]=useState<string|null>(null);
useEffect(()=>{const f=()=>setSc(scrollY>20);f();addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);
useEffect(()=>{setOpen(false);setQ(null)},[p]);
const hits=q?hrefs.map((h,i)=>[h,t.nav[i]]).filter(x=>x[1].toLowerCase().includes(q.toLowerCase())):[];
const Lang=<div role="group" className="flex rounded-full border border-gold/50 p-0.5 text-xs">{(["en","hi"] as const).map(l=><button key={l} onClick={()=>setLang(l)} aria-pressed={lang===l} className={`rounded-full px-3 py-1 transition ${lang===l?"bg-gold text-white":"text-navy"}`}>{l==="en"?"EN":"हिंदी"}</button>)}</div>;
const Book=<Link href="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold to-saffron px-5 py-2.5 text-sm font-medium text-white shadow transition hover:-translate-y-0.5"><Calendar size={16}/>{t.book}</Link>;
return <header className={`fixed inset-x-0 top-0 z-50 transition ${sc||open?"bg-ivory/90 shadow-sm backdrop-blur":"bg-ivory/40 backdrop-blur-sm"}`}>
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
<Link href="/" className="flex items-center gap-2 font-serif text-2xl tracking-widest text-navy"><Flower2 className="text-gold"/>ASTRA</Link>
<nav className="hidden gap-7 lg:flex">{hrefs.map((h,i)=><Link key={h} href={h} className="group relative text-sm text-navy">{t.nav[i]}<span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all ${p===h?"w-full":"w-0 group-hover:w-full"}`}/></Link>)}</nav>
<div className="hidden items-center gap-4 lg:flex"><button aria-label="Search" onClick={()=>setQ(q===null?"":null)}><Search size={18}/></button>{Lang}{Book}</div>
<div className="flex items-center gap-3 lg:hidden"><button aria-label="Search" onClick={()=>setQ(q===null?"":null)}><Search size={20}/></button><button aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div>
{q!==null&&<div className="mx-auto max-w-md px-5 pb-4"><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder={t.search} className="w-full rounded-full border border-gold/40 bg-ivory px-4 py-2 text-sm"/>{q&&<ul className="mt-2 rounded-xl border border-gold/30 bg-ivory p-2 text-sm">{hits.length?hits.map(h=><li key={h[0]}><button className="w-full rounded px-3 py-2 text-left hover:bg-cream" onClick={()=>r.push(h[0])}>{h[1]}</button></li>):<li className="px-3 py-2">{t.none}</li>}</ul>}</div>}
<AnimatePresence>{open&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden lg:hidden"><div className="flex flex-col gap-4 px-5 pb-6">{hrefs.map((h,i)=><Link key={h} href={h} className="border-b border-gold/20 py-2 font-serif text-lg">{t.nav[i]}</Link>)}<div>{Lang}</div>{Book}</div></motion.div>}</AnimatePresence>
</header>}
