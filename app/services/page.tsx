"use client";
import {useT} from "@/lib/i18n";import {Head,Cards,Section} from "@/components/ui";import {Sparkles,Briefcase,Users,Heart,Sun,Orbit} from "lucide-react";
export default function P(){const {t}=useT();return <div className="pt-16"><Section><Head t={t.sT}/><Cards items={t.svc} icons={[Sparkles,Briefcase,Users,Heart,Sun,Orbit]} learn={t.learn}/></Section></div>}
