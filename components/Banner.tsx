'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    { id: 0, images: ['/images/banner1.png'], title: 'Creativity' },
    { id: 1, images: ['/images/banner2.png'], title: 'Perfect Delivery', type: 'centered' },
    { 
      id: 2, 
      images: ['/images/banner3a.png', '/images/banner3b.png', '/images/banner3c.png'], 
      title: 'Good Looking Squad',
      type: 'triple'
    },
    { id: 3, images: ['/images/banner4.png'], title: 'Warmth and Welcome', type: 'full' },
    { 
      id: 4, 
      images: ['/images/banner5.png', '/images/banner5a.png'], 
      title: 'Great Results',
      type: 'double'
    },
    { id: 5, images: ['/images/banner6.png'], title: 'Team Spirit', type: 'wide' },
  ]

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A3140] bg-[url('/images/bg.png')] bg-contain bg-center bg-no-repeat md:h-[720px] lg:h-screen">
      <p className="absolute bottom-0 left-0 z-20 p-[10px] font-baloo-medium text-[20px] text-white md:p-[4%] md:text-[25px]">
        Hi there, we are NO WALLS <br /> We&apos;re like every other ad agency,
        <br /> except for the:
      </p>

      <div className="inner h-full">
        <div className="hover relative h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`slide-inner absolute bottom-0 left-1/2 w-[80%] -translate-x-1/2 opacity-0 transition-opacity duration-500 ${
                activeSlide === slide.id ? 'opacity-100' : ''
              } ${
                slide.type === 'wide' ? 'w-full md:w-[60%]' : ''
              } ${
                slide.type === 'centered' ? 'bottom-auto top-1/2 -translate-x-1/2 -translate-y-1/2' : ''
              } ${
                slide.type === 'full' ? 'bottom-auto top-0' : ''
              }`}
            >
              {slide.type === 'triple' ? (
                <>
                  <Image
                    src={slide.images[0] || "/placeholder.svg"}
                    alt={slide.title}
                    width={400}
                    height={600}
                    className="absolute bottom-0 left-[20%] z-[1] w-[80%] max-w-[250px] md:w-[50%] md:max-w-[400px] lg:left-[30%] lg:w-[40%]"
                  />
                  <Image
                    src={slide.images[1] || "/placeholder.svg"}
                    alt={slide.title}
                    width={400}
                    height={600}
                    className="absolute bottom-0 left-1/2 z-[2] w-[80%] max-w-[250px] -translate-x-1/2 md:w-[50%] md:max-w-[400px] lg:w-[40%]"
                  />
                  <Image
                    src={slide.images[2] || "/placeholder.svg"}
                    alt={slide.title}
                    width={400}
                    height={600}
                    className="absolute bottom-0 left-[72%] z-[1] w-[80%] max-w-[250px] md:w-[50%] md:max-w-[400px] lg:w-[40%]"
                  />
                </>
              ) : slide.type === 'double' ? (
                <>
                  <Image
                    src={slide.images[0] || "/placeholder.svg"}
                    alt={slide.title}
                    width={650}
                    height={600}
                    className="absolute bottom-0 left-1/2 z-[2] w-full max-w-[350px] -translate-x-1/2 -translate-y-1/2 md:w-[80%] md:max-w-[450px] lg:max-w-[650px] lg:-translate-y-0"
                  />
                  <Image
                    src={slide.images[1] || "/placeholder.svg"}
                    alt={slide.title}
                    width={650}
                    height={600}
                    className="absolute bottom-0 left-[72%] z-[2] w-full max-w-[350px] -translate-x-1/2 -translate-y-[20%] md:w-[80%] md:max-w-[450px] lg:max-w-[650px] lg:translate-y-[20%]"
                  />
                </>
              ) : slide.type === 'centered' ? (
                <Image
                  src={slide.images[0] || "/placeholder.svg"}
                  alt={slide.title}
                  width={800}
                  height={800}
                  className="absolute left-1/2 top-1/2 w-[140%] -translate-x-1/2 -translate-y-1/2 md:w-[50%]"
                />
              ) : slide.type === 'full' ? (
                <Image
                  src={slide.images[0] || "/placeholder.svg"}
                  alt={slide.title}
                  width={1200}
                  height={800}
                  className="absolute left-1/2 top-1/2 w-[150%] -translate-x-[57%] translate-y-[34%] lg:static lg:w-full lg:translate-x-0 lg:translate-y-0"
                />
              ) : (
                <Image
                  src={slide.images[0] || "/placeholder.svg"}
                  alt={slide.title}
                  width={450}
                  height={600}
                  className="mx-auto block w-full max-w-[350px] md:max-w-[450px]"
                />
              )}
            </div>
          ))}
        </div>

        <div className="text absolute right-0 top-1/2 z-[5] -translate-y-1/2 text-right lg:-translate-y-[40%]">
          <h3
            onMouseEnter={() => setActiveSlide(0)}
            className={`m-[20px] flex cursor-pointer items-start font-baloo-semibold text-white opacity-50 transition-all duration-300 hover:opacity-100 md:m-[12px_20px] md:text-[25px] ${
              activeSlide === 0 ? 'opacity-100' : ''
            }`}
          >
            <span className="text-[15px] text-[#CD7E50]">#1</span>/ Creativity
          </h3>
          <h3
            onMouseEnter={() => setActiveSlide(1)}
            className={`m-[20px] cursor-pointer font-baloo-semibold text-white opacity-50 transition-all duration-300 hover:opacity-100 md:m-[12px_20px] md:flex md:items-start md:text-[25px] ${
              activeSlide === 1 ? 'opacity-100' : ''
            }`}
          >
            <span className="text-[15px] text-[#CD7E50]">#2</span>/ Perfect <br />
            Delivery
          </h3>
          <h3
            onMouseEnter={() => setActiveSlide(2)}
            className={`m-[20px] cursor-pointer font-baloo-semibold text-white opacity-50 transition-all duration-300 hover:opacity-100 md:m-[12px_20px] md:flex md:items-start md:text-[25px] ${
              activeSlide === 2 ? 'opacity-100' : ''
            }`}
          >
            <span className="text-[15px] text-[#CD7E50]">#3</span>/ Good <br />
            Looking <br />
            Squad
          </h3>
          <h3
            onMouseEnter={() => setActiveSlide(3)}
            className={`m-[20px] cursor-pointer font-baloo-semibold text-white opacity-50 transition-all duration-300 hover:opacity-100 md:m-[12px_20px] md:flex md:items-start md:text-[25px] ${
              activeSlide === 3 ? 'opacity-100' : ''
            }`}
          >
            <span className="text-[15px] text-[#CD7E50]">#4</span>/ Warmth <br />
            and <br />
            Welcome
          </h3>
          <h3
            onMouseEnter={() => setActiveSlide(4)}
            className={`m-[20px] cursor-pointer font-baloo-semibold text-white opacity-50 transition-all duration-300 hover:opacity-100 md:m-[12px_20px] md:flex md:items-start md:text-[25px] ${
              activeSlide === 4 ? 'opacity-100' : ''
            }`}
          >
            <span className="text-[15px] text-[#CD7E50]">#5</span>/ Great <br />
            Results
          </h3>
          <h3
            onMouseEnter={() => setActiveSlide(5)}
            className={`m-[20px] cursor-pointer font-baloo-semibold text-white opacity-50 transition-all duration-300 hover:opacity-100 md:m-[12px_20px] md:flex md:items-start md:text-[25px] ${
              activeSlide === 5 ? 'opacity-100' : ''
            }`}
          >
            <span className="text-[15px] text-[#CD7E50]">#7</span>/ Team <br />
            Spirit
          </h3>
        </div>
      </div>
    </section>
  )
}
