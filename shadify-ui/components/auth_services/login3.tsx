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

export default function Login3() {
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
    <div className="flex items-center justify-center  p-4">

      <div className="card-v3 relative z-10 w-full max-w-md bg-neutral-100 dark:bg-neutral-900 backdrop-blur-xl border rounded-2xl p-8">
        <form onSubmit={formSubmitHandler} className="space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black dark:text-white">Welcome</h1>
            <p className="text-sm text-gray-400 mt-2">Sign in to your account</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-sm font-medium text-black dark:text-white ">
                Username
              </Label>
              <Input
                className="input-v3 mt-2 w-full bg-neutral-200 text-white placeholder-gray-500 rounded-lg py-2 px-4"
                onChange={onChangeFormHandler}
                value={loginFormData.username}
                id="username"
                name="username"
                type="text"
                placeholder="john_doe"
              />
              {errors.username && <p className="text-red-400 text-xs mt-1.5">{errors.username}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-black dark:text-white">
                Email
              </Label>
              <Input
                className="input-v3 mt-2 w-full bg-neutral-200 text-white placeholder-gray-500 rounded-lg py-2 px-4"
                onChange={onChangeFormHandler}
                value={loginFormData.email}
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-medium text-black dark:text-white">
                Password
              </Label>
              <Input
                className="input-v3 mt-2 w-full bg-neutral-200 text-white placeholder-gray-500 rounded-lg py-2 px-4"
                onChange={onChangeFormHandler}
                value={loginFormData.password}
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
              />
              {errors.password && <p className="text-red-400 text-xs mt-1.5">{errors.password}</p>}
            </div>
          </div>

          <Button
            className="btn-glow w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300"
            type="submit"
          >
            Sign in
          </Button>

          <div className="flex gap-3">
            <Button
              className="flex-1 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors border border-neutral-700"
              type="button"
            >
              <FaGoogle className="mr-2" />
            </Button>
            <Button
              className="flex-1 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors border border-neutral-700"
              type="button"
            >
              <IoLogoGithub className="mr-2" />
            </Button>
          </div>

          <div className="text-center text-sm pt-4 border-t border-neutral-800">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-400 hover:text-blue-300 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
