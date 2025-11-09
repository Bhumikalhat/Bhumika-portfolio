import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="grid md:grid-cols-3 gap-6 items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="col-span-1"
      >
        <div className="w-40 h-40 bg-gradient-to-tr from-slate-100 to-white rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-lg transition-all">
          {/* ✅ Use image from public folder */}
          <img
            src="/Bhumika_Alhat_PassportPhoto.jpg"
            alt="Bhumika"
            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>

      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold">
          Hi — I’m <span className="text-slate-900">BHUMIKA SACHIN ALHAT</span>
        </h1>

        <p className="mt-2 text-slate-600 max-w-2xl">
          Aspiring Software Engineer with hands-on experience in full-stack development using Java,
          Python, and Android. Skilled in developing scalable applications through internships and
          academic projects.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <a href="#projects" className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm">
            View Projects
          </a>
          <a href="#contact" className="px-4 py-2 border border-slate-200 rounded-md text-sm">
            Contact Me
          </a>
          {/* ✅ Fixed Resume path */}
          <a
            href="/BHUMIKA_SACHIN_ALHAT_Resume.pdf"
            download
            className="px-4 py-2 text-sm underline hover:text-slate-900"
          >
            Resume
          </a>
        </div>

        <div className="mt-5">
          <h4 className="text-sm font-medium text-slate-700">Technical Skills</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              'Java',
              'Python',
              'C++',
              'Android',
              'HTML',
              'CSS',
              'PHP',
              'Firebase',
              'MySQL',
              'MongoDB',
            ].map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 rounded-full bg-slate-100 border border-slate-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
