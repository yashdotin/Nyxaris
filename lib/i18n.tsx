"use client";
import {createContext,useContext,useEffect,useState} from "react";
import {dict,Lang} from "./dict";
const C=createContext<any>(null);
export const LangProvider=({children}:any)=>{
const [lang,setLang]=useState<Lang>("en");
useEffect(()=>{const l=localStorage.getItem("lang") as Lang;if(l==="hi"||l==="en")setLang(l)},[]);
useEffect(()=>{localStorage.setItem("lang",lang);document.documentElement.lang=lang},[lang]);
return <C.Provider value={{lang,setLang,t:dict[lang]}}>{children}</C.Provider>};
export const useT=()=>useContext(C);
