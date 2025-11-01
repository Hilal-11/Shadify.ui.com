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

  return (
    <div className="flex items-center justify-center min-h-screen  p-4 relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .blob { animation: float 6s ease-in-out infinite; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .card-v2 { animation: fadeInUp 0.8s ease-out; }
        .input-glow:focus { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <div className="blob absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div
          className="blob absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="card-v2 relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <form onSubmit={formSubmitHandler} className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Login
            </h1>
            <p className="text-sm text-gray-600 mt-2">Access your account securely</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-sm font-semibold text-gray-700">
                Username
              </Label>
              <Input
                className="input-glow mt-2 border-2 border-gray-200 rounded-xl focus:border-transparent transition-all"
                onChange={onChangeFormHandler}
                value={loginFormData.username}
                id="username"
                name="username"
                type="text"
                placeholder="john_doe"
              />
              {errors.username && <p className="text-red-500 text-xs mt-1.5">{errors.username}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email
              </Label>
              <Input
                className="input-glow mt-2 border-2 border-gray-200 rounded-xl focus:border-transparent transition-all"
                onChange={onChangeFormHandler}
                value={loginFormData.email}
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                Password
              </Label>
              <Input
                className="input-glow mt-2 border-2 border-gray-200 rounded-xl focus:border-transparent transition-all"
                onChange={onChangeFormHandler}
                value={loginFormData.password}
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1.5">{errors.password}</p>}
            </div>
          </div>

          <Button
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 hover:shadow-xl text-white font-semibold transition-all duration-300 hover:scale-105"
            type="submit"
          >
            Sign in
          </Button>

          <div className="flex gap-3">
            <Button
              className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium transition-all"
              type="button"
            >
              <FaGoogle className="mr-2" />
            </Button>
            <Button
              className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium transition-all"
              type="button"
            >
              <IoLogoGithub className="mr-2" />
            </Button>
          </div>

          <div className="text-center text-sm pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              New here?{" "}
              <Link
                href="/signup"
                className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent font-semibold"
              >
                Create account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
