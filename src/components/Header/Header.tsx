"use client";

import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import ThemeContext from "@/context/themeContext";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <header className="flex flex-wrap md:flex-nowrap py-6 px-4 mx-auto items-center justify-between text-xl container">
      <div className="flex items-center w-full md:w-2/3">
        <Link href="/" className="font-black text-tertiary-dark">
            Hotelin 
        </Link>
        <ul className="flex items-center ml-5">
            <li className="flex items-center">
                <Link href="/auth">
                    <FaUserCircle className="cursor-pointer" />
                </Link>
            </li>
            <li className="flex items-center ml-3">
                {darkTheme ? <MdOutlineLightMode onClick={() => {
                    setDarkTheme(false)
                    window.localStorage.removeItem('app-theme')
                }} className="cursor-pointer" /> : <MdDarkMode onClick={() => {
                    setDarkTheme(true)
                    window.localStorage.setItem('app-theme', JSON.stringify(true))
                }} className="cursor-pointer" />
                }
            </li>
        </ul>
      </div>
      <ul className="w-full flex items-center justify-between mt-4 md:w-1/3">
        <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link href={'/'}>
                Home
            </Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link href={'/rooms'}>
                Rooms
            </Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link href={'/'}>
                Contact
            </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
