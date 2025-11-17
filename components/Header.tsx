'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="absolute z-[999] flex w-full items-center justify-between transition-all duration-300 md:mt-[20px]">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="No Walls Logo"
          width={150}
          height={50}
          className="ml-4 w-[150px] transition-all duration-300 md:ml-8"
        />
      </Link>
      <div className="menu">
        <div
          className={`hamburger relative z-[3] mr-[20px] cursor-pointer px-[20px] py-[20px] outline outline-1 outline-white transition-all duration-700 md:hidden ${
            isOpen ? 'open' : ''
          }`}
          onClick={() => {
            setIsOpen(!isOpen)
            document.body.classList.toggle('menu-is-open')
          }}
        >
          <span
            className={`absolute -translate-x-[15px] h-[1px] w-[30px] bg-white transition-all duration-700 ${
              isOpen ? 'bg-transparent' : ''
            } before:absolute before:top-[-5px] before:h-full before:w-full before:bg-white before:transition-all before:duration-700 before:content-[''] after:absolute after:top-[5px] after:h-full after:w-full after:bg-white after:transition-all after:duration-700 after:content-[''] ${
              isOpen
                ? 'before:top-[0px] before:rotate-[-90deg] after:opacity-0 rotate-[-495deg]'
                : ''
            }`}
          ></span>
        </div>
        <ul
          className={`absolute left-1/2 top-[70px] w-[90%] -translate-x-1/2 overflow-hidden bg-white text-right transition-all duration-700 md:static md:mr-[30px] md:flex md:w-max md:translate-x-0 md:transform-none md:border-none md:bg-transparent ${
            isOpen
              ? 'max-h-[400px] border-t-[3px] border-[#CD7E50] md:border-none'
              : 'max-h-0 md:max-h-none'
          }`}
        >
          <li className="md:mx-[10px]">
            <Link
              href="/"
              onClick={() => {
                setIsOpen(false)
                document.body.classList.remove('menu-is-open')
              }}
              className={`block cursor-pointer p-[20px] font-baloo-semibold text-[15px] text-[#0A3140] transition-all duration-300 hover:bg-[#0A3140] hover:text-white md:p-[13px_25px] md:text-white md:opacity-50 md:hover:opacity-100 ${
                pathname === '/' ? 'md:opacity-100' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li className="md:mx-[10px]">
            <Link
              href="/team"
              onClick={() => {
                setIsOpen(false)
                document.body.classList.remove('menu-is-open')
              }}
              className={`block cursor-pointer p-[20px] font-baloo-semibold text-[15px] text-[#0A3140] transition-all duration-300 hover:bg-[#0A3140] hover:text-white md:p-[13px_25px] md:text-white md:opacity-50 md:hover:opacity-100 ${
                pathname === '/team' ? 'md:opacity-100' : ''
              }`}
            >
              The Team
            </Link>
          </li>
          <li className="md:mx-[10px]">
            <Link
              href="/contact"
              onClick={() => {
                setIsOpen(false)
                document.body.classList.remove('menu-is-open')
              }}
              className="block cursor-pointer p-[20px] font-baloo-semibold text-[15px] text-[#0A3140] transition-all duration-300 hover:bg-[#0A3140] hover:text-white md:bg-[#CD7E50] md:p-[13px_25px] md:text-white md:opacity-100"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
