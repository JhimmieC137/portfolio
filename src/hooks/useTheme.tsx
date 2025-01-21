// import { Dispatch, SetStateAction, useEffect, useState } from "react";

// export default function UseThemeSwitcher(): [string, Dispatch<SetStateAction<string>>] {

//     const preferDarkQuery = "(prefer-color-scheme: dark)";
//     const [mode, setMode] = useState("");

//     useEffect(() => {
//         const mediaQuery = window.matchMedia(preferDarkQuery);
//         const userPref = window.localStorage.getItem("theme")
        
//         const handleChange = () => {
//             if (userPref) {
//                 let check = userPref === "dark" ? "dark" : "light";
//                 setMode(check);

//                 if(check==='dark') document.documentElement.classList.add('dark')
//                 else document.documentElement.classList.remove('dark')
            
//             } else {
//                 let check = mediaQuery.matches ? "dark" : "light";
//                 setMode(check)

//                 if(check==='dark') document.documentElement.classList.add('dark')
//                 else document.documentElement.classList.remove('dark')

//             }
//         }

//         // handleChange();

//         mediaQuery.addEventListener("change", handleChange)

//         return () => mediaQuery.removeEventListener("change", handleChange)
//     }, [])


//     useEffect(() => {
//         if (mode === "dark") {
//             window.localStorage.setItem("theme", "dark");
//             document.documentElement.classList.add('dark')
//         } else {
//             window.localStorage.setItem("theme", "light");
//             document.documentElement.classList.remove('dark')
//         }

//     }, [mode])

//     return [mode, setMode]
// };


import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // This code runs only in the browser
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (userPrefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return { theme, setTheme: updateTheme }
}