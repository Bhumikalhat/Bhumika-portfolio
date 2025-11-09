import React, {useEffect, useState} from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'


export default function ThemeToggle(){
const [dark, setDark] = useState(() => {
if (typeof window === 'undefined') return false
return localStorage.getItem('theme') === 'dark'
})


useEffect(()=>{
const root = document.documentElement
if(dark){
root.classList.add('dark')
localStorage.setItem('theme','dark')
} else {
root.classList.remove('dark')
localStorage.setItem('theme','light')
}
},[dark])


return (
<button onClick={()=>setDark(!dark)} aria-label="Toggle theme" className="p-2 rounded-md">
{dark ? <FaSun/> : <FaMoon/>}
</button>
)
}