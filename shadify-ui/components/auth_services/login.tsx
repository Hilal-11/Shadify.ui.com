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

const loginSchema = z.object({
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

const  Login = () => {

  const [errors, setErrors] = useState<Record<string, string>>({})

  const [loginFormData , setLoginFormData] = useState({
    username: "",
    email: "",
    password: "" 
  })

  const onChangeFormHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name , value } = event.target;
    setLoginFormData({...loginFormData,  [name]: value})
  }
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrors({});


    const parse = loginSchema.safeParse(loginFormData);
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
    setLoginFormData({
      username: "",
      email: "",
      password: "" 
    })
  }
  
  return (
    <div className="flex flex-col py-2 w-full">

      <div
              className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
              )}
            />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    


      <div className="z-50 bg-white border dark:bg-neutral-900 w-[100%] md:[450px] lg:[500px] h-auto p-6
      
      
      shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] 
      
      
      rounded-lg">
        <form onSubmit={formSubmitHandler} className="lg:w-[400px] md:w-[400px]">
            <h1 className="text-4xl font-bold text-center">Login</h1>
            <p className="text-sm text-center text-muted-foreground pb-8 py-2">Login to your account</p>

            <div className="mt-4">
                <Label className="text-sm font-medium pb-1" htmlFor="username">Username</Label>
                <Input onChange={onChangeFormHandler} value={loginFormData.username} id="username" name="username" type="text" placeholder="johndoe"/>
                <div className='text-red-600 font-sans font-bold px-1 text-[12px] py-1 '>{errors.username}</div>
            </div>
            <div className="mt-4">
                <Label className="text-sm font-medium pb-1" htmlFor="email">Email</Label>
                <Input onChange={onChangeFormHandler} value={loginFormData.email} id="email" name="email" type="email" placeholder="johndoe@example.com"/>
                <div className='text-red-600 font-sans font-bold px-1 text-[12px] py-1 '>{errors.email}</div>
            </div>
            <div className="mt-4">
                <Label className="text-sm font-medium pb-1" htmlFor="password">Password</Label>
                <Input onChange={onChangeFormHandler} value={loginFormData.password} id="password" name="password" type="password" placeholder="••••••••"/>
                <div className='text-red-600 font-sans font-bold px-1 text-[12px] py-1 '>{errors.password}</div>
            </div>

            <div className="mt-6">
                <Button className="w-full py-2 rounded-md cursor-pointer" type="submit">Login</Button>
            </div>
            <div className="mt-3 flex gap-1 w-full">
                <Button className="bg-tranaparent dark:bg-neutral-100 text-neutral-800 hover:text-white py-2 rounded-md cursor-pointer w-1/2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" type="submit"><span><FaGoogle  /></span>Google</Button>
                <Button className="bg-tranaparent dark:bg-neutral-100 text-neutral-800 hover:text-white py-2 rounded-md cursor-pointer w-1/2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" type="submit"><span><IoLogoGithub  /></span>GitHub</Button>

            </div>
            <div className="mt-4 text-center text-sm">
                <p>Don not have an account? <Link href="/signup" className="text-neutral-500">Signup</Link></p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login