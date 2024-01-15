"use client";

import {useState, useEffect} from 'react'

import ThemeContext from '@/context/themeContext';

type ProviderProps = {
  children: React.ReactNode
};

const ThemeProvider: React.FC<ProviderProps> = ({children}) => {
  const themeLocalStorage: boolean = typeof window !== 'undefined' && window.localStorage.getItem('app-theme') ? JSON.parse(window.localStorage.getItem('app-theme')! as string) : false;
  const [darkTheme, setDarkTheme] = useState<boolean>(themeLocalStorage);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) return <></>;

  return (
    <ThemeContext.Provider value={{
        darkTheme,
        setDarkTheme
    }}>
      <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        <div className="dark:text-white text-[#1E1E1E] dark:bg-gray-900">
            {children}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
