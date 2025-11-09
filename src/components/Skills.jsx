import React from 'react'


const skills = [
'Java','Python','C++','SQL','HTML','CSS','PHP','Android','Firebase','MySQL','MongoDB'
]


export default function Skills(){
return (
<section id="skills" className="mt-10">
<h3 className="text-xl font-semibold">Technical Skills</h3>
<div className="mt-4 flex flex-wrap gap-2">
{skills.map(s=> (
<span key={s} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-sm">{s}</span>
))}
</div>
</section>
)
}