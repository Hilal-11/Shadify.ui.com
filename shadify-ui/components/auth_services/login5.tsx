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

export default function Login5() {
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-4 relative overflow-hidden">
      <style>{`
        @keyframes orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 40px) scale(0.9); }
        }
        .orb1 { animation: orb 15s ease-in-out infinite; }
        .orb2 { animation: orb 20s ease-in-out infinite 5s; }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .card-v5 { animation: fadeInScale 0.9s ease-out; }
        .glass-input {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        .glass-input:focus {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        .glass-btn {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .glass-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <div className="orb1 absolute w-96 h-96 bg-white opacity-20 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="orb2 absolute w-72 h-72 bg-white opacity-20 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="card-v5 relative z-10 w-full max-w-md">
        <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={formSubmitHandler} className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white drop-shadow-lg">Welcome</h1>
              <p className="text-white/80 mt-2 text-sm font-medium">Sign in to continue</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-white/90 text-sm font-semibold mb-2 block drop-shadow">
                  Username
                </Label>
                <Input
                  className="glass-input w-full text-white placeholder-white/50 rounded-xl py-3 px-4 focus:ring-0"
                  onChange={onChangeFormHandler}
                  value={loginFormData.username}
                  id="username"
                  name="username"
                  type="text"
                  placeholder="john_doe"
                />
                {errors.username && <p className="text-white/90 text-xs mt-2 drop-shadow">{errors.username}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-white/90 text-sm font-semibold mb-2 block drop-shadow">
                  Email
                </Label>
                <Input
                  className="glass-input w-full text-white placeholder-white/50 rounded-xl py-3 px-4 focus:ring-0"
                  onChange={onChangeFormHandler}
                  value={loginFormData.email}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-white/90 text-xs mt-2 drop-shadow">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="password" className="text-white/90 text-sm font-semibold mb-2 block drop-shadow">
                  Password
                </Label>
                <Input
                  className="glass-input w-full text-white placeholder-white/50 rounded-xl py-3 px-4 focus:ring-0"
                  onChange={onChangeFormHandler}
                  value={loginFormData.password}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                />
                {errors.password && <p className="text-white/90 text-xs mt-2 drop-shadow">{errors.password}</p>}
              </div>
            </div>

            <Button
              className="w-full py-3 rounded-xl bg-white/30 hover:bg-white/40 text-white font-bold transition-all duration-300 border border-white/30"
              type="submit"
            >
              Sign in
            </Button>

            <div className="flex gap-3">
              <Button className="glass-btn flex-1 py-2.5 rounded-xl text-white font-medium" type="button">
                <FaGoogle className="mr-2" />
              </Button>
              <Button className="glass-btn flex-1 py-2.5 rounded-xl text-white font-medium" type="button">
                <IoLogoGithub className="mr-2" />
              </Button>
            </div>

            <div className="text-center text-sm pt-4 border-t border-white/20">
              <p className="text-white/90 drop-shadow">
                Don't have an account?{" "}
                <Link href="/signup" className="text-white font-bold hover:text-white/80 transition-colors">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
