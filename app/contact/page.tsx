"use client";
import {useT} from "@/lib/i18n";import {Head,Section} from "@/components/ui";import Form from "@/components/Form";import {MessageCircle} from "lucide-react";
export default function P(){const {t}=useT();
const fields=[{n:"name",type:"text",req:true},{n:"phone",type:"tel",req:true},{n:"service",type:"select",req:true,opts:t.svc.map((s:string[])=>s[0])},{n:"date",type:"date",req:true},{n:"msg",type:"textarea"}];
const wa=`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;
return <div className="pt-16"><Section><Head t={t.cT}/><div className="mx-auto max-w-xl"><Form fields={fields} submit={t.send} done={()=><p className="rounded-2xl border border-gold/40 bg-ivory p-5 text-center">{t.okBook}</p>}/>
<a href={wa} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-center gap-2 rounded-full border border-gold py-3.5 transition hover:bg-gold hover:text-white"><MessageCircle size={18}/>{t.wa}</a></div></Section></div>}
