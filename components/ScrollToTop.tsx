'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)

    const body = document.body
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      
      if (currentScroll <= 0) {
        body.classList.remove('scroll-up')
        body.classList.remove('scroll-down')
        return
      }

      if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
      } else if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
      }
      
      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return null
}
