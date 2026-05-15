import React from "react";
import { Mail, Lock, Camera } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6">
      
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg text-white">
        
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="bg-indigo-600 p-3 rounded-2xl">
            <Camera className="w-6 h-6" />
          </div>

          <h1 className="text-3xl font-bold">Login</h1>
        </div>

        <form className="space-y-5">
          
          <div>
            <label className="block mb-2 text-slate-300">
              Email Address
            </label>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Mail className="w-5 h-5 text-slate-400 mr-3" />

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none w-full placeholder:text-slate-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-slate-300">
              Password
            </label>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Lock className="w-5 h-5 text-slate-400 mr-3" />

              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent outline-none w-full placeholder:text-slate-500"
              />
            </div>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-500 transition py-3 rounded-xl font-semibold text-lg">
            Login
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Don’t have an account?{" "}
          <span className="text-indigo-400 cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}