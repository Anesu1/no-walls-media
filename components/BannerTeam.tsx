import Image from 'next/image'

export default function BannerTeam() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center bg-[#0A3140] bg-[url('/images/bg.png')] bg-contain bg-center bg-no-repeat md:h-[720px] lg:h-screen">
      <div className="banner-inner text-center lg:-translate-y-full">
        <h1 className="mb-[20px] font-baloo-bold text-[40px] text-white md:text-[80px]">
          The <span className="text-[#CD7E50]">NoWalls</span> Team
        </h1>
        <p className="font-baloo-medium text-[18px] text-white">
          The Brains Behind The Brands
        </p>
      </div>
      <div className="image absolute bottom-0 hidden lg:block">
        <Image
          src="/images/team1.png"
          alt="Team member"
          width={300}
          height={400}
          className="absolute bottom-0 left-0 w-[20%] transition-all duration-700 hover:filter-none"
          style={{ filter: 'sepia(95%) hue-rotate(150deg) saturate(200%)' }}
        />
        <Image
          src="/images/team2.png"
          alt="Team member"
          width={300}
          height={400}
          className="absolute bottom-0 left-[14%] w-[20%] transition-all duration-700 hover:filter-none"
          style={{ filter: 'sepia(95%) hue-rotate(150deg) saturate(200%)' }}
        />
        <Image
          src="/images/team3.png"
          alt="Team member"
          width={300}
          height={400}
          className="absolute bottom-0 left-[25%] w-[20%] transition-all duration-700 hover:filter-none"
          style={{ filter: 'sepia(95%) hue-rotate(150deg) saturate(200%)' }}
        />
        <Image
          src="/images/team5.png"
          alt="Team member"
          width={300}
          height={400}
          className="absolute bottom-0 left-[40%] z-[4] w-[20%] transition-all duration-700 hover:filter-none"
          style={{ filter: 'sepia(95%) hue-rotate(150deg) saturate(200%)' }}
        />
        <Image
          src="/images/team6.png"
          alt="Team member"
          width={300}
          height={400}
          className="absolute bottom-0 left-[55%] z-[3] w-[20%] transition-all duration-700 hover:filter-none"
          style={{ filter: 'sepia(95%) hue-rotate(150deg) saturate(200%)' }}
        />
        <Image
          src="/images/team7.png"
          alt="Team member"
          width={300}
          height={400}
          className="absolute bottom-0 left-[67%] z-[2] w-[20%] transition-all duration-700 hover:filter-none"
          style={{ filter: 'sepia(95%) hue-rotate(150deg) saturate(200%)' }}
        />
        <Image
          src="/images/team8.png"
          alt="Team member"
          width={300}
          height={400}
          className="absolute bottom-0 left-[80%] z-[1] w-[20%] transition-all duration-700 hover:filter-none"
          style={{ filter: 'sepia(95%) hue-rotate(150deg) saturate(200%)' }}
        />
      </div>
    </section>
  )
}
