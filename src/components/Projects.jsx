import React from 'react'


const data = [
{
title: 'Car Parking System Using Arduino & IR Sensors',
desc: 'Real-time smart parking solution using IR sensors and Firebase updates.',
tech: 'Python • Android • Firebase',
role: 'Team Lead'
},
{
title: 'Movie Ticket Booking System',
desc: 'Web-based ticket booking with login/authentication and dynamic movie listings.',
tech: 'PHP • HTML • CSS',
role: 'Team Lead'
},
{
title: 'Twitter Sentiment Analysis',
desc: 'Analyzed public sentiment using NLP and ML on Twitter data.',
tech: 'Python • Pandas • Scikit-learn',
role: 'Data Analyst'
},
{
title: 'COVID-19 Data Dashboard',
desc: 'Cleaned and visualized COVID-19 data with interactive graphs.',
tech: 'Python • Power BI',
role: 'Data Scientist'
}
]


export default function Projects(){
return (
<div className="grid gap-4">
{data.map((p, idx)=> (
<article key={idx} className="card hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<h3 className="font-semibold">{p.title}</h3>
<p className="mt-1 text-sm text-slate-600">{p.desc}</p>
<div className="mt-3 text-xs text-slate-500">{p.tech} • {p.role}</div>
</div>
<div className="text-sm text-slate-400">{idx+1}</div>
</div>
</article>
))}
</div>
)
}