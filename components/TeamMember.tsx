import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'

interface TeamMemberProps {
  teamImage: string
  title: string
  role: string
  email: string
  number: string
  children: React.ReactNode
}

export default function TeamMember({
  teamImage,
  title,
  role,
  email,
  number,
  children,
}: TeamMemberProps) {
  return (
    <section className="py-[10%] lg:py-[5%]">
      <div className="inner mx-auto max-w-[500px] overflow-hidden rounded-[10px] bg-[#F5F5F5] p-[5%] pb-0 lg:flex lg:w-[85%] lg:max-w-[1500px] lg:justify-between">
        <div className="team-div lg:my-auto lg:w-[45%]">
          <h2 className="mb-[10px] font-baloo-bold text-[35px] text-[#CD7E50] md:text-[40px] lg:text-[45px]">
            {title}
          </h2>
          <h4 className="mb-[20px] font-baloo-bold text-[25px]">{role}</h4>
          <div className="text space-y-[20px]">{children}</div>
          <div className="bottom mt-6 md:flex">
            <p className="mb-4 flex items-center md:mb-0 md:mr-[30px]">
              <Mail className="mr-[10px] h-[20px] w-[20px]" />
              <span className="font-baloo-bold text-[18px]">
                {email}@nowalls.co.zw
              </span>
            </p>
            <p className="flex items-center">
              <Phone className="mr-[10px] h-[20px] w-[20px]" />
              <span className="font-baloo-bold text-[18px]">{number}</span>
            </p>
          </div>
        </div>
        <div className="img mt-8 bg-[url('/images/logoabout.png')] bg-[90%] bg-center bg-no-repeat transition-all hover:scale-110 md:mx-auto md:max-w-[500px] lg:mx-0 lg:mt-0 lg:w-[45%]">
          <Image
            src={`/images/team${teamImage}`}
            alt={title}
            width={500}
            height={600}
            className="mx-auto w-full transition-all duration-300"
          />
        </div>
      </div>
    </section>
  )
}
