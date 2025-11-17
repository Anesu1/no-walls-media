import Image from 'next/image'
import { Phone, Building2, Mail } from 'lucide-react'

export default function GetInTouch() {
  return (
    <section className="my-[5%] md:mx-[2%]">
      <div className="intouch overflow-hidden bg-black text-white md:mx-auto md:max-w-[560px] md:rounded-[10px] lg:flex lg:max-w-[1500px] lg:justify-between">
        <div className="inner p-[5%] lg:w-1/2">
          <h2 className="mb-[30px] font-baloo-bold text-[30px] leading-[1.3] text-white md:text-[40px] lg:text-[45px]">
            Get In Touch With Us
          </h2>
          <p className="mb-[20px] flex items-center">
            <Phone className="mr-[20px] h-[30px] w-[30px] text-[#CD7E50]" />
            <span className="font-baloo-semibold leading-[1.3] md:flex md:justify-between">
              +263 8644 284 606{' '}
              <span className="hidden md:mx-[5px] md:inline">|</span>
              <br className="md:hidden" />
              +263 8644 297 792{' '}
              <span className="hidden md:mx-[5px] md:inline">|</span>
              <br className="md:hidden" />
              +263 778 793 029
            </span>
          </p>
          <p className="mb-[20px] flex items-center">
            <Building2 className="mr-[20px] h-[30px] w-[30px] text-[#CD7E50]" />
            <span className="font-baloo-semibold leading-[1.3]">
              67 Samora Machel Ave, Harare
            </span>
          </p>
          <p className="mb-[20px] flex items-center">
            <Mail className="mr-[20px] h-[30px] w-[30px] text-[#CD7E50]" />
            <span className="font-baloo-semibold leading-[1.3]">
              info@nowalls.co.zw
            </span>
          </p>
        </div>
        <Image
          src="/images/getintouch.png"
          alt="Bike No Walls"
          width={600}
          height={600}
          className="mt-auto w-full object-contain lg:w-[40%]"
        />
      </div>
    </section>
  )
}
