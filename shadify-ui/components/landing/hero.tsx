"use client";

import type React from "react";
import CheckoutInteraction from "../shadifyui/currency-transfer"
import Profile04 from "../shadifyui/profile/profile-04";
import AICardGeneration from "../shadifyui/blocks/ai-card-generation/ai-card-generation"
import Alert04 from "@/components/shadifyui/alert/alert-04";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiNextjsFill  , RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { RiRemixRunLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import Login from '../auth_services/login';
import { CodeBlock } from "@/components/landing/code-block";


interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
  short?: string;
  end?: string;
}

const code = `"use client"
import { useState, type FormEvent, type ChangeEvent } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaGoogle } from "react-icons/fa6"
import { IoLogoGithub } from "react-icons/io5"
import { z } from "zod"

const loginSchema = z.object({
  username: z.preprocess((v) => (typeof v === "string" ? v.trim() : v), z.string().min(3, "username is required")),
  email: z.preprocess(
    (v) => (typeof v === "string" ? v.trim() : v),
    z
      .string()
      .regex(
        /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i,
        "Invalid email address",
      ),
  ),
  password: z.string().min(8, "Password must be at least 8 characters"),
})
export default function Login2() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const onChangeFormHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setLoginFormData({ ...loginFormData, [name]: value })
  }
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrors({})
    const parse = loginSchema.safeParse(loginFormData)
    if (!parse.success) {
      const fieldErrors: Record<string, string> = {}
      for (const issue of parse.error.issues) {
        const key = issue.path[0] ?? "form"
        fieldErrors[String(key)] = issue.message
      }
      setErrors(fieldErrors)
      return
    }
    console.log(parse.data)
    setLoginFormData({ username: "", email: "", password: "" })
  }
`

export function HeroSection() {
  return (
    <div className="w-full h-auto mx-auto container lg:px-4 py-14 lg:py-16 flex flex-col items-center justify-center text-center gap-6 relative">
      <div className="w-full h-auto px-2 lg:px-4 py-6">
        <span className="mx-auto w-auto lg:w-[310px] md:w-[310px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] font-sans text-sm px-6 py-px rounded-full bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 flex gap-2 items-center justify-center">New Components: let's expolore all <IoIosArrowRoundForward className="text-lg"/></span> 
        <div className="mt-8 text-center flex-col gap-4">
          <h1 className="font-sans font-bold text-3xl lg:text-6xl text-neutral-800 dark:text-neutral-200">A Modern Component & Template Library for Fast, Beautiful Frontends.</h1>
          <p className="px-0 lg:w-2/3 mx-auto py-4 font-sans font-medium text-md text-neutral-600 dark:text-neutral-400">Fully customizable React components and production-ready templates — built with clean code, modern design principles, and performance at the core.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <button className="font-sans font-medium px-10 py-2 rounded-md bg-neutral-100 text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Explore Templets</button>
          <button className="font-sans font-medium px-10 py-2 rounded-md bg-neutral-900 text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Components Documentation</button>
        </div>
      </div>
      <div className='flex flex-wrap justify-evenly lg:justify-center py-0 gap-4 lg:gap-6 poppins-medium text-neutral-600'>
          <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiNextjsFill/></span>Next.js</span>
          <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><TbBrandReactNative/></span>React</span>
          <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiTailwindCssFill/></span>Tailwind CSS</span>
          <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><TbBrandFramerMotion/></span>Motion</span>
          <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiRemixRunLine/></span>Remix</span>
          <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><SiShadcnui/></span>Shadcn</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-1 w-full justify-center py-4 relative ">
          <div className="lg:w-[400px] w-full relative top-10"><AICardGeneration/></div>
          <div className="flex flex-col gap-4 lg:w-auto w-full"><CheckoutInteraction /><Alert04/></div>
          <div className="hidden lg:flex w-[400px] relative top-12"><Profile04 /></div>
        </div> 
        {/* <div className="w-full lg:h-[676px] h-[350px] aspect-video overflow-hidden mt-20 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-md"> 
          <video
            className="w-full rounded-md object-cover h-full"
            src={"https://res.cloudinary.com/dou5rypdf/video/upload/v1761979295/showcase_-_Made_with_Clipchamp_y0czxl.mp4"}
            loop
            autoPlay
          ></video>
        </div> */}

        <br /><br />
        <div className="pt-10">
          <h1 className="font-sans font-bold text-3xl lg:text-6xl text-neutral-800 dark:text-neutral-200">Easy to Integrate, Build faster ship faster and Deploy smoothly</h1>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 justify-between py-10 items-center">
            <div className='bg-neutral-50 dark:bg-neutral-950 rounded-lg md:h-[450px] lg:h-[500px] w-[100%] overflow-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] mt-20'>
              <CodeBlock 
                language="jsx"
                filename="DummyComponent.jsx"
                highlightLines={[9, 13, 14, 18]}
                code={code}
               />
            </div>
            <div className='relative pt-10 w-full flex justify-center flex-nowrap overflow-hidden h-full '>
                <img className="hidden md:block lg:block z-20 rounded-2xl relative -bottom-20"src="https://res.cloudinary.com/dou5rypdf/image/upload/v1760628911/Screenshot_2025-09-26_025658_hoxc9a.png" alt="" />
              <Login />
                <img  className="hidden md:block lg:block z-20 relative top-16 rounded-2xl" src="https://res.cloudinary.com/dou5rypdf/image/upload/v1761817889/Screenshot_2025-10-30_151515_bimxnq.png" alt="" />
            </div>
          </div>
        </div>
    </div>
  );
}