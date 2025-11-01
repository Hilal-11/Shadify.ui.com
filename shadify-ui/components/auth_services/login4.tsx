"use client"
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

export default function Login4() {
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

  return (
    <div className="flex min-h-screen">
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .form-v4 { animation: slideInLeft 0.8s ease-out; }
        .input-v4 {
          transition: all 0.3s ease;
          border-bottom: 2px solid rgba(229, 231, 235, 1);
        }
        .input-v4:focus {
          border-bottom-color: rgba(34, 197, 94, 1);
          background: rgba(34, 197, 94, 0.02);
        }
      `}</style>

      {/* Left - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white dark:bg-neutral-950 p-8 md:p-12">
        <div className="form-v4 w-full max-w-sm">
          <form onSubmit={formSubmitHandler} className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Login</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm leading-relaxed">
                Welcome back! Please login to your account to continue.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="username" className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-3 block">
                  Username
                </Label>
                <Input
                  className="input-v4 w-full bg-transparent border-0 border-b-2 px-0 py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:ring-0"
                  onChange={onChangeFormHandler}
                  value={loginFormData.username}
                  id="username"
                  name="username"
                  type="text"
                  placeholder="john_doe"
                />
                {errors.username && <p className="text-red-500 text-xs mt-2">{errors.username}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-3 block">
                  Email
                </Label>
                <Input
                  className="input-v4 w-full bg-transparent border-0 border-b-2 px-0 py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:ring-0"
                  onChange={onChangeFormHandler}
                  value={loginFormData.email}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-3 block">
                  Password
                </Label>
                <Input
                  className="input-v4 w-full bg-transparent border-0 border-b-2 px-0 py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:ring-0"
                  onChange={onChangeFormHandler}
                  value={loginFormData.password}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                />
                {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
              </div>
            </div>

            <Button
              className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all duration-300 hover:shadow-lg"
              type="submit"
            >
              Sign in
            </Button>

            <div className="flex gap-3">
              <Button
                className="flex-1 py-2 rounded-lg border-2 border-gray-200 dark:border-neutral-700 bg-transparent hover:bg-gray-100 dark:hover:bg-neutral-900 text-gray-900 dark:text-white transition-colors"
                type="button"
              >
                <FaGoogle className="mr-2" /> Google
              </Button>
              <Button
                className="flex-1 py-2 rounded-lg border-2 border-gray-200 dark:border-neutral-700 bg-transparent hover:bg-gray-100 dark:hover:bg-neutral-900 text-gray-900 dark:text-white transition-colors"
                type="button"
              >
                <IoLogoGithub className="mr-2" /> GitHub
              </Button>
            </div>

            <div className="text-center text-sm">
              <p className="text-gray-600 dark:text-gray-400">
                New here?{" "}
                <Link
                  href="/signup"
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold"
                >
                  Create account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right - Visual */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <circle cx="100" cy="100" r="80" fill="white" opacity="0.1" />
            <circle cx="300" cy="200" r="120" fill="white" opacity="0.1" />
            <circle cx="150" cy="350" r="100" fill="white" opacity="0.1" />
          </svg>
        </div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Secure Login</h2>
          <p className="text-lg text-white/90 max-w-sm leading-relaxed">
            Experience a seamless and secure authentication process designed with your privacy in mind.
          </p>
        </div>
      </div>
    </div>
  )
}
