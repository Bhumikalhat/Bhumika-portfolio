import React from 'react'


const items = [
{company:'Prozure Software Solutions Pvt. Ltd.', role:'Android App Development Intern', duration:'Jul 2022 – Aug 2022', bullets:['Front-end & back-end Android dev in Java']},
{company:'Jayawantrao Sawant College of Engineering', role:'Full Stack Development Intern', duration:'Dec 2024 – Mar 2025', bullets:['Built PHP-SQL projects, DB-driven web apps']},
{company:'Deloitte (Forage)', role:'Cybersecurity Simulation', duration:'Jul 2025', bullets:['Threat detection & incident response simulation']}
]


export default function Experience(){
return (
<div className="space-y-3">
{items.map((it, i)=> (
<div key={i} className="card">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium">{it.company}</h4>
<div className="text-sm text-slate-600">{it.role}</div>
</div>
<div className="text-xs text-slate-500">{it.duration}</div>
</div>
<ul className="mt-3 text-sm text-slate-700 list-disc pl-5">
{it.bullets.map((b,idx)=> <li key={idx}>{b}</li>)}
</ul>
</div>
))}
</div>
)
}