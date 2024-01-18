"use client";

import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import Image from "next/image";

import ThemeContext from "@/context/themeContext";
import { useSession } from "next-auth/react";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const { data: session } = useSession();
  return (
    <header className="flex flex-wrap md:flex-nowrap py-6 px-4 mx-auto items-center justify-between text-xl container sticky top-0 !z-50">
      <div className="flex items-center w-full md:w-2/3">
        <Link href="/" className="font-black text-tertiary-dark">
            Hotelin 
        </Link>
        <ul className="flex items-center ml-5">
            <li className="flex items-center">
                { session?.user ? 
                <Link href={`/users/${session.user.id}`}>
                    {session?.user?.image ? 
                        <div className="rounded-full h-10 w-10 overflow-hidden" >
                            <Image 
                                src={session.user.image} 
                                alt={session.user.name!} 
                                width={40} height={40} 
                                className="scale-animation img"
                            /> 
                        </div> : 
                        <FaUserCircle className="cursor-pointer" />
                    }
                </Link> : 
                <Link href="/auth"> 
                    <FaUserCircle className="cursor-pointer" />
                </Link> }
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
        <li className="scale-animation duration-500 transition-all">
            <Link href={'/'}>
                Home
            </Link>
        </li>
        <li className="scale-animation duration-500 transition-all">
            <Link href={'/rooms'}>
                Rooms
            </Link>
        </li>
        <li className="scale-animation duration-500 transition-all">
            <Link href={'/'}>
                Contact
            </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
