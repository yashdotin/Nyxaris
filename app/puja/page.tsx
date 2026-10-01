"use client";
import {useT} from "@/lib/i18n";import {Head,Cards,Section} from "@/components/ui";import {Flame,Orbit,Sparkles,Compass} from "lucide-react";
export default function P(){const {t}=useT();return <div className="pt-16"><Section><Head t={t.pT}/><Cards items={t.puja} icons={[Flame,Orbit,Sparkles,Compass]} learn={t.learn}/></Section></div>}
