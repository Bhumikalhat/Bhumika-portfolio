import React from 'react'
import ThemeToggle from './ThemeToggle'


export default function Navbar(){
return (
<header className="sticky top-0 z-30 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-slate-200 dark:border-slate-800">
<nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="text-lg font-semibold">BHUMIKA SACHIN ALHAT</div>
<div className="flex items-center gap-4">
<a href="#projects" className="text-sm">Projects</a>
<a href="#experience" className="text-sm">Experience</a>
<a href="#contact" className="text-sm">Contact</a>
<ThemeToggle />
</div>
</nav>
</header>
)
}