"use client"
import { useState , useEffect, FormEvent, ChangeEvent, InputEventHandler } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaGoogle } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { z } from 'zod'
import Header from "@/components/landing/header"
const signupSchema = z.object({
  username: z.preprocess(
    (v) => typeof v === 'string' ? v.trim() : v,
    z.string().min(3, "username is required")
  ),
  email: z.preprocess(
    (v) => typeof v === 'string' ? z.trim() : v,
    z.string().regex(/^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i, "Invalid email address")
  ),
  password: z.string().min(8, "Password must be at least 8 characters")
})

const  Signup = () => {

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [signupFormData , setSignupFormData] = useState({
    username: "",
    email: "",
    password: "" 
  })

  const onChangeFormHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name , value } = event.target;
    setSignupFormData({...signupFormData,  [name]: value})
  }
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrors({});


    const parse = signupSchema.safeParse(signupFormData);
    if(!parse.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parse.error.issues) {
        const key = issue.path[0] ?? "form";
        fieldErrors[String(key)] = issue.message;
      }
      setErrors(fieldErrors)
      return;
    }

    const ValidData = parse.data;
    console.log(ValidData)

    // POST Request to send the data----for login on Backend
    setSignupFormData({
      username: "",
      email: "",
      password: "" 
    })
  }
  
  return (
    <div className="w-full h-auto">
      <Header />
    <div className="flex flex-col w-full h-screen relative">
      
      <div className="w-svw h-[100%] z-30 bg-white dark:bg-neutral-900
      shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] px-4 py-4">

        <form onSubmit={formSubmitHandler} className="">
            <h1 className="text-4xl font-bold ">Signup</h1>
            <p className="font-sans font-medium text-sm pl-1.5 text-neutral-700 dark:text-neutral-300 pb-8 py-1">Create your account and get start building.</p>

            <div className="mt-3">
                <Label className="text-[15px] font-sans font-medium pb-1 px-1" htmlFor="username">Username</Label>
                <Input onChange={onChangeFormHandler} value={signupFormData.username} className="py-5" id="username" name="username" type="text" placeholder="Enter username:- "/>
                <div className='text-red-600 font-sans font-bold px-1 text-[12px] py-1 '>{errors.username}</div>
            </div>
            <div className="mt-3">
                <Label className="text-[15px] font-sans font-medium pb-1 px-1" htmlFor="email">Email</Label>
                <Input onChange={onChangeFormHandler} value={signupFormData.email} className="py-5" id="email" name="email" type="email" placeholder="Enter email ID:- "/>
                <div className='text-red-600 font-sans font-bold px-1 text-[12px] py-1 '>{errors.email}</div>
            </div>
            <div className="mt-3">
                <Label className="text-[15px] font-sans font-medium pb-1 px-1" htmlFor="password">Password</Label>
                <Input onChange={onChangeFormHandler} value={signupFormData.password} className="py-5" id="password" name="password" type="password" placeholder="Enter Password:-"/>
                <div className='text-red-600 font-sans font-bold px-1 text-[12px] py-1 '>{errors.password}</div>
            </div>
             <div className="mt-1 flex justify-between w-full px-2 text-sm font-medium text-neutral-600">
                <div className="flex gap-2 items-center justify-center">
                  <input type="checkbox" id="rememberMe" name="rememberMe" />
                  <p className="dark:text-neutral-300">Remember Me</p>
                </div>
                <div><p className="dark:text-neutral-300">Forget password?</p></div>
            </div>
            <div className="mt-8">
                <Button className="w-full cursor-pointer font-sans font-medium px-10 py-6 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] text-md" type="submit">Signup</Button>
            </div>

            <div className="mt-6 mb-6 flex justify-between items-center gap-3 px-4">
              <div className="border border-gray-300 w-full h-px"></div>
              <span className="font-medium font-sans text-sm">OR</span>
              <div className="border border-gray-300 w-full h-px"></div>
            </div>
            <div className="mt-3 flex gap-1 w-full">
                <Button className="w-full cursor-pointer font-sans font-medium px-10 py-6 rounded-md bg-gradient-to-t from-[#f5f5f5] to-[#d4d4d4] text-neutral-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] text-md" type="submit"><span className="text-2xl"><FaGoogle  /></span>Google</Button>
            </div>

            <div className="mt-4 text-center text-sm 0 mx-auto">
                <p >Don not have an account? <Link href="/login" className="text-neutral-500">login</Link></p>
            </div>

        </form>
      </div>
    </div>
  </div>
  )
}

export default Signup