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

export default function Login1() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4">
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .login-v1-form { animation: slideIn 0.6s ease-out; }
        .input-v1 {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .input-v1:focus { transform: translateY(-2px); }
        .label-v1 {
          transition: all 0.2s ease;
        }
      `}</style>

      <div className="login-v1-form w-full max-w-md">
        <form onSubmit={formSubmitHandler} className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Enter your credentials to login</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="username" className="label-v1 text-sm font-medium text-slate-700 dark:text-slate-300">
                Username
              </Label>
              <Input
                className="input-v1 mt-1.5 border-slate-200 dark:border-slate-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400"
                onChange={onChangeFormHandler}
                onFocus={() => setFocusedField("username")}
                onBlur={() => setFocusedField(null)}
                value={loginFormData.username}
                id="username"
                name="username"
                type="text"
                placeholder="john_doe"
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="label-v1 text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </Label>
              <Input
                className="input-v1 mt-1.5 border-slate-200 dark:border-slate-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400"
                onChange={onChangeFormHandler}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                value={loginFormData.email}
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="password" className="label-v1 text-sm font-medium text-slate-700 dark:text-slate-300">
                Password
              </Label>
              <Input
                className="input-v1 mt-1.5 border-slate-200 dark:border-slate-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400"
                onChange={onChangeFormHandler}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                value={loginFormData.password}
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
          </div>

          <Button
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 hover:shadow-lg"
            type="submit"
          >
            Sign in
          </Button>

          <div className="flex gap-3">
            <Button
              className="flex-1 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              type="button"
            >
              <FaGoogle className="mr-2" /> Google
            </Button>
            <Button
              className="flex-1 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              type="button"
            >
              <IoLogoGithub className="mr-2" /> GitHub
            </Button>
          </div>

          <div className="text-center text-sm">
            <p className="text-slate-600 dark:text-slate-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
