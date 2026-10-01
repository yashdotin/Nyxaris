"use client";
import {useForm} from "react-hook-form";import {zodResolver} from "@hookform/resolvers/zod";import {z} from "zod";import {useState} from "react";import {useT} from "@/lib/i18n";
export type F={n:string;type:string;req?:boolean;opts?:string[]};
export default function Form({fields,submit,done}:{fields:F[];submit:string;done:(d:any)=>React.ReactNode}){
const {t}=useT();const [res,setRes]=useState<any>(null),[bad,setBad]=useState(false);
const schema=z.object(Object.fromEntries(fields.map(f=>[f.n,!f.req?z.string().optional():f.n==="phone"?z.string().regex(/^[6-9]\d{9}$/,t.err.phone):z.string().trim().min(1,t.err.req)])));
const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm<any>({resolver:zodResolver(schema)});
const on=async(d:any)=>{setBad(false);try{await new Promise(r=>setTimeout(r,800));setRes(d)}catch{setBad(true)}};
const cls="mt-1 w-full rounded-xl border border-gold/40 bg-ivory px-4 py-3";
return <><form onSubmit={handleSubmit(on)} noValidate className="space-y-4 rounded-2xl border border-gold/30 bg-pale p-6">
{fields.map(f=><div key={f.n}><label htmlFor={f.n} className="text-sm font-medium">{t.f[f.n]}</label>
{f.type==="select"?<select id={f.n} {...register(f.n)} className={cls}><option value="">{t.sel}</option>{f.opts!.map(o=><option key={o}>{o}</option>)}</select>
:f.type==="textarea"?<textarea id={f.n} rows={4} {...register(f.n)} className={cls}/>
:<input id={f.n} type={f.type} {...register(f.n)} className={cls}/>}
{errors[f.n]&&<p role="alert" className="mt-1 text-sm text-red-700">{errors[f.n]!.message as string}</p>}</div>)}
{bad&&<p role="alert" className="text-sm text-red-700">{t.fail}</p>}
<button disabled={isSubmitting} className="w-full rounded-full bg-gradient-to-r from-gold to-saffron py-3.5 font-medium text-white shadow transition hover:-translate-y-0.5 disabled:opacity-60">{isSubmitting?t.sending:submit}</button></form>
{res&&<div className="mt-6" role="status">{done(res)}</div>}</>}
