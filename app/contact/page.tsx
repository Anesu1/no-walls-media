'use client'

import { Check, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section className="bg-[#0A3140] px-[5%] py-[20%] md:py-[10%] md:pb-[5%]">
      <div className="mx-auto max-w-[1300px] rounded-none bg-[#103D4F] p-[5%] md:rounded-[10px]">
        <h2 className="mb-[30px] font-baloo-bold text-[30px] leading-[1.3] text-white md:text-[38px] lg:text-[45px]">
          Contact Us
        </h2>
        <form>
          <div className="mb-[30px] flex flex-col justify-between gap-[20px] md:flex-row">
            <div className="w-full md:w-[45%]">
              <label className="mb-2 block font-baloo-medium text-[15px] text-white/65">
                Your Name
              </label>
              <input
                type="text"
                className="w-full rounded-[8px] bg-[#0A3140] px-[10px] pb-[5px] pt-[10px] font-baloo-medium text-[15px] text-white outline-none"
              />
            </div>
            <div className="w-full md:w-[45%]">
              <label className="mb-2 block font-baloo-medium text-[15px] text-white/65">
                Your Email
              </label>
              <input
                type="email"
                className="w-full rounded-[8px] bg-[#0A3140] px-[10px] pb-[5px] pt-[10px] font-baloo-medium text-[15px] text-white outline-none"
              />
            </div>
          </div>

          <div className="mb-[30px] flex flex-col justify-between gap-[30px] md:flex-row">
            <div className="w-full md:w-[45%]">
              <h4 className="mb-[20px] font-baloo-bold text-[18px] text-white">
                I&apos;m Reaching Out On Behalf Of A Company (CHECK ALL THAT APPLY)
              </h4>
              <div className="space-y-[20px]">
                <label className="flex cursor-pointer items-center font-baloo-medium text-[17px] text-white">
                  <input type="checkbox" className="peer hidden" />
                  <div className="mr-[10px] flex h-[25px] min-w-[25px] items-center justify-center rounded-[5px] bg-[#0A3140]">
                    <Check className="h-0 w-0 text-[#CD7E50] transition-all peer-checked:h-[10px] peer-checked:w-[10px]" />
                  </div>
                  <span>I&apos;m exploring new agency partners</span>
                </label>

                <label className="flex cursor-pointer items-center font-baloo-medium text-[17px] text-white">
                  <input type="checkbox" className="peer hidden" />
                  <div className="mr-[10px] flex h-[25px] min-w-[25px] items-center justify-center rounded-[5px] bg-[#0A3140]">
                    <Check className="h-0 w-0 text-[#CD7E50] transition-all peer-checked:h-[10px] peer-checked:w-[10px]" />
                  </div>
                  <span>I&apos;m looking for branding and signage services</span>
                </label>

                <label className="flex cursor-pointer items-center font-baloo-medium text-[17px] text-white">
                  <input type="checkbox" className="peer hidden" />
                  <div className="mr-[10px] flex h-[25px] min-w-[25px] items-center justify-center rounded-[5px] bg-[#0A3140]">
                    <Check className="h-0 w-0 text-[#CD7E50] transition-all peer-checked:h-[10px] peer-checked:w-[10px]" />
                  </div>
                  <span>
                    I&apos;m looking for media production services (radio and TV ads,
                    online content)
                  </span>
                </label>

                <label className="flex cursor-pointer items-center font-baloo-medium text-[17px] text-white">
                  <input type="checkbox" className="peer hidden" />
                  <div className="mr-[10px] flex h-[25px] min-w-[25px] items-center justify-center rounded-[5px] bg-[#0A3140]">
                    <Check className="h-0 w-0 text-[#CD7E50] transition-all peer-checked:h-[10px] peer-checked:w-[10px]" />
                  </div>
                  <span>
                    I&apos;m looking for consultative services (strategy, digital
                    transformation, corporate training)
                  </span>
                </label>

                <label className="flex cursor-pointer items-center font-baloo-medium text-[17px] text-white">
                  <input type="checkbox" className="peer hidden" />
                  <div className="mr-[10px] flex h-[25px] min-w-[25px] items-center justify-center rounded-[5px] bg-[#0A3140]">
                    <Check className="h-0 w-0 text-[#CD7E50] transition-all peer-checked:h-[10px] peer-checked:w-[10px]" />
                  </div>
                  <span>I&apos;m looking for eCommerce support</span>
                </label>
              </div>
            </div>

            <div className="w-full md:w-[45%]">
              <h4 className="mb-[20px] font-baloo-bold text-[18px] text-white">
                I&apos;m an individual (CHECK ALL THAT APPLY)
              </h4>
              <div className="space-y-[20px]">
                <label className="flex cursor-pointer items-center font-baloo-medium text-[17px] text-white">
                  <input type="checkbox" className="peer hidden" />
                  <div className="mr-[10px] flex h-[25px] min-w-[25px] items-center justify-center rounded-[5px] bg-[#0A3140]">
                    <Check className="h-0 w-0 text-[#CD7E50] transition-all peer-checked:h-[10px] peer-checked:w-[10px]" />
                  </div>
                  <span>
                    I run a small business and would like to get training for
                    marketing and advertising
                  </span>
                </label>

                <label className="flex cursor-pointer items-center font-baloo-medium text-[17px] text-white">
                  <input type="checkbox" className="peer hidden" />
                  <div className="mr-[10px] flex h-[25px] min-w-[25px] items-center justify-center rounded-[5px] bg-[#0A3140]">
                    <Check className="h-0 w-0 text-[#CD7E50] transition-all peer-checked:h-[10px] peer-checked:w-[10px]" />
                  </div>
                  <span>I&apos;m looking for personal branding</span>
                </label>

                <label className="flex cursor-pointer items-center font-baloo-medium text-[17px] text-white">
                  <input type="checkbox" className="peer hidden" />
                  <div className="mr-[10px] flex h-[25px] min-w-[25px] items-center justify-center rounded-[5px] bg-[#0A3140]">
                    <Check className="h-0 w-0 text-[#CD7E50] transition-all peer-checked:h-[10px] peer-checked:w-[10px]" />
                  </div>
                  <span>
                    I&apos;m an influencer and would like to work with you and your
                    clients
                  </span>
                </label>

                <label className="flex cursor-pointer items-center font-baloo-medium text-[17px] text-white">
                  <input type="checkbox" className="peer hidden" />
                  <div className="mr-[10px] flex h-[25px] min-w-[25px] items-center justify-center rounded-[5px] bg-[#0A3140]">
                    <Check className="h-0 w-0 text-[#CD7E50] transition-all peer-checked:h-[10px] peer-checked:w-[10px]" />
                  </div>
                  <span>
                    I&apos;m a consultant looking to partner on projects I have in mind
                  </span>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="group mx-auto flex cursor-pointer items-center border-none bg-transparent"
          >
            <span className="mr-[20px] font-baloo-semibold text-[25px] text-white">
              Submit
            </span>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#CD7E50] transition-all">
              <ArrowRight className="h-[20px] w-[20px] text-white transition-all group-hover:h-[23px] group-hover:w-[23px]" />
            </div>
          </button>
        </form>
      </div>
    </section>
  )
}
