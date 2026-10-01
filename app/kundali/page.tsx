"use client";
import {useT} from "@/lib/i18n";import {Head,Section} from "@/components/ui";import Form from "@/components/Form";
export default function P(){const {t,lang}=useT();
const fields=[{n:"name",type:"text",req:true},{n:"dob",type:"date",req:true},{n:"tob",type:"time",req:true},{n:"place",type:"text",req:true},{n:"gender",type:"select",opts:t.opts.gender}];
return <div className="pt-16"><Section><Head t={t.kT} p={t.kD}/><div className="mx-auto max-w-xl"><Form fields={fields} submit={t.go} done={d=><div className="rounded-2xl border border-gold/40 bg-ivory p-6 text-center"><h3 className="font-serif text-2xl">{t.prevT}</h3>
<svg viewBox="0 0 100 100" className="mx-auto my-4 h-56 w-56 fill-none stroke-gold" strokeWidth=".8"><rect x="1" y="1" width="98" height="98"/><path d="M1 1L99 99M99 1L1 99M50 1L99 50L50 99L1 50Z"/></svg>
<p className="font-medium">{d.name}</p><p className="text-sm text-navy/70">{new Date(d.dob).toLocaleDateString(lang==="hi"?"hi-IN":"en-IN",{dateStyle:"long"})} • {d.tob} • {d.place}</p><p className="mt-3 text-xs text-navy/60">{t.prevN}</p></div>}/></div></Section></div>}
