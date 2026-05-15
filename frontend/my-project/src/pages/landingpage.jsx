import React from "react";
import { Camera, Sparkles, ImageIcon, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl">
            <Camera className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold">VisionCaption AI</h1>
        </div>

        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
            Login
          </button>

          <button className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 items-center px-8 lg:px-20 py-20 gap-16">
        
        <div>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            AI Powered
            <span className="text-indigo-400"> Image Captioning</span>
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            Upload any image and generate intelligent captions instantly.
            Designed for accessibility, automation, and social media workflows.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-2xl font-semibold transition">
              Get Started
            </button>

            <button className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-2xl transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
          <div className="bg-slate-900 rounded-2xl p-6 border border-white/10">
            <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-56 rounded-2xl flex items-center justify-center">
              <ImageIcon className="w-20 h-20 text-white/80" />
            </div>

            <div className="mt-6">
              <p className="text-slate-400 text-sm">Generated Caption</p>

              <h3 className="text-xl font-semibold mt-2">
                “A beautiful mountain landscape during sunset with calm water reflections.”
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-8 lg:px-20 pb-20">
        <Feature
          icon={<Sparkles />}
          title="Smart AI"
          desc="Advanced image understanding using modern AI models."
        />

        <Feature
          icon={<ImageIcon />}
          title="Fast Captioning"
          desc="Generate captions within seconds for any image."
        />

        <Feature
          icon={<Shield />}
          title="Secure Uploads"
          desc="Your uploaded images stay private and protected."
        />
      </section>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
      <div className="bg-indigo-500/20 text-indigo-400 w-fit p-3 rounded-xl">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mt-4">{title}</h3>

      <p className="text-slate-400 mt-2">{desc}</p>
    </div>
  );
}