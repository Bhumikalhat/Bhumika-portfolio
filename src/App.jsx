import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'


export default function App(){
return (
<div className="min-h-screen flex flex-col">
<header className="sticky top-0 bg-white/60 backdrop-blur z-50 border-b border-slate-100">
<div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
<div className="text-lg font-semibold">BHUMIKA SACHIN ALHAT</div>
<nav className="space-x-4 text-sm text-slate-600">
<a href="#projects" className="hover:text-slate-900">Projects</a>
<a href="#experience" className="hover:text-slate-900">Experience</a>
<a href="#contact" className="hover:text-slate-900">Contact</a>
</nav>
</div>
</header>


<main className="flex-1">
<div className="max-w-4xl mx-auto px-6 py-12">
<Hero />
<section id="projects" className="mt-10">
<h2 className="text-2xl font-semibold mb-4">Projects</h2>
<Projects />
</section>


<section id="experience" className="mt-10">
<h2 className="text-2xl font-semibold mb-4">Internships & Experience</h2>
<Experience />
</section>


<section id="certifications" className="mt-10">
<h2 className="text-2xl font-semibold mb-4">Certifications & Achievements</h2>
<div className="grid gap-3 md:grid-cols-2">
<div className="card">
<h3 className="font-medium">Certifications</h3>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li>Advanced Java — Disha Institute</li>
<li>Data Science — IBM</li>
<li>MongoDB (Atlas), SQL (HackerRank)</li>
</ul>
</div>


<div className="card">
<h3 className="font-medium">Achievements</h3>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li>Best Academic Performance — JSPM’s Polytechnic (2023)</li>
<li>Top 15 — IEEE Eu-Reka 2024</li>
<li>National Space Quiz — ISRO & MyGov participant</li>
</ul>
</div>
</div>
</section>


<section id="contact" className="mt-10">
<h2 className="text-2xl font-semibold mb-4">Contact</h2>
<div className="card flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<div className="font-medium">Email</div>
<div className="text-sm text-slate-600">bhumikaalhat@gmail.com</div>
</div>
<div>
<div className="font-medium">LinkedIn / GitHub</div>
<div className="text-sm text-slate-600">linkedin.com/in/bhumika-alhat — github.com/Bhumikalhat</div>
</div>
<a href="/BHUMIKA _SACHIN_ ALHAT_Resume.pdf" download className="inline-block ml-auto bg-slate-900 text-white px-4 py-2 rounded-md text-sm">Download Resume</a>
</div>
</section>
</div>
</main>


<Footer />
</div>
)
}