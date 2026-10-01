"use client";
import dynamic from "next/dynamic";import Hero from "@/components/Hero";
const Rest=dynamic(()=>import("@/components/HomeSections"));
export default function Home(){return <><Hero/><Rest/></>}
