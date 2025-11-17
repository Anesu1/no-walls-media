import Image from 'next/image'

export default function About() {
  return (
    <section className="p-[10%_5%] lg:flex lg:justify-between">
      <div className="inner mb-8 lg:mb-0 lg:w-[45%] lg:max-w-[500px]">
        <h2 className="mb-[30px] font-baloo-bold text-[30px] leading-[1.3] text-[#CD7E50] md:text-[38px] lg:text-[45px]">
          Think outside the box? <br className="hidden lg:block" /> We reject the whole{' '}
          <br className="hidden lg:block" /> notion of boxes!
        </h2>
        <p className="mb-[20px] font-baloo leading-[1.3] text-[15px] text-[#0A3140]">
          We&apos;re working on being the best ad agency in the entire universe…
        </p>
        <p className="mb-[20px] font-baloo leading-[1.3] text-[15px] text-[#0A3140]">
          For now, we&apos;ll have to settle for being the best on earth!
        </p>
        <p className="mb-[20px] font-baloo leading-[1.3] text-[15px] text-[#0A3140]">
          <span className="font-baloo-bold">It&apos;s cliche time:</span> <br />
          Teamwork, makes the dream work! <br />
          (Because it does. Seriously)
        </p>
      </div>
      <div className="right relative bg-[url('/images/logoabout.png')] bg-[70%] bg-center bg-no-repeat md:mx-auto md:max-w-[500px] lg:mx-0 lg:w-[45%]">
        <Image
          src="/images/dinaso.png"
          alt="about no walls"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </section>
  )
}
