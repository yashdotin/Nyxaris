"use client";
import {useT} from "@/lib/i18n";import {Head,Section} from "@/components/ui";
export default function P(){const {t}=useT();return <div className="pt-16"><Section><Head t={t.aboutT}/><div className="mx-auto max-w-2xl space-y-4 text-lg text-navy/80">{t.about.map((p:string,i:number)=><p key={i}>{p}</p>)}</div></Section></div>}
