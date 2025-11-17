import Link from 'next/link'
import Image from 'next/image'
import { Youtube, Facebook, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0A3140] p-[10%_5%] md:p-[5%]">
      <div className="top md:relative md:flex md:justify-between">
        <div className="left">
          <h2 className="mb-4 font-baloo-bold text-[30px] leading-[1.3] text-white md:text-[40px] lg:text-[45px]">
            Let&apos;s create something <br /> great together!
          </h2>
          <Image
            src="/images/logo.png"
            alt="No Walls Logo"
            width={200}
            height={66}
            className="my-[20px] w-[150px] md:my-0 md:w-[200px]"
          />
        </div>
        <div className="right relative mt-8 md:mt-0 md:w-[45%] md:max-w-[400px] md:pb-[10px] md:before:absolute md:before:bottom-0 md:before:right-[-12%] md:before:h-[2px] md:before:w-[115%] md:before:bg-white md:before:content-[''] lg:before:right-[-14%]">
          <h4 className="mb-[20px] font-baloo-bold text-[20px] text-white">
            Quick Links
          </h4>
          <div className="inner flex flex-wrap">
            <Link
              href="/"
              className="mb-[10px] w-[45%] max-w-[200px] font-baloo-medium text-white"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="mb-[10px] w-[45%] max-w-[200px] font-baloo-medium text-white"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="mb-[10px] w-[45%] max-w-[200px] font-baloo-medium text-white"
            >
              About Us
            </Link>
            <Link
              href="/team"
              className="mb-[10px] w-[45%] max-w-[200px] font-baloo-medium text-white"
            >
              The NoWalls Team
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom mt-8 md:flex md:items-center md:justify-between">
        <p className="mb-[20px] font-baloo-semibold leading-[1.3] text-[#CD7E50]">
          Copyright © {year}
        </p>
        <div className="links flex">
          <a href="#" className="mr-[10px] text-white">
            <Youtube className="h-[20px] w-[20px]" />
          </a>
          <a href="#" className="mr-[10px] text-white">
            <Facebook className="h-[20px] w-[20px]" />
          </a>
          <a href="#" className="mr-[10px] text-white">
            <svg className="h-[20px] w-[20px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </a>
          <a href="#" className="mr-[10px] text-white">
            <Instagram className="h-[20px] w-[20px]" />
          </a>
          <a href="#" className="text-white">
            <Linkedin className="h-[20px] w-[20px]" />
          </a>
        </div>
      </div>
    </footer>
  )
}
