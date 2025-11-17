import Image from 'next/image'

export default function Clients() {
  const clients = [
    { image: '1.png', alt: 'Empower Bank' },
    { image: '2.png', alt: 'Hino' },
    { image: '3.png', alt: 'ICZ' },
    { image: '4.png', alt: 'OLD MUTUAL' },
    { image: '5.png', alt: 'UNDP' },
    { image: '6.png', alt: 'VARICHEM' },
    { image: '8.png', alt: 'AFRICANDA' },
    { image: '9.png', alt: 'Eight 2 Five' },
    { image: '11.png', alt: 'impala car rental' },
    { image: '12.png', alt: 'potraz' },
    { image: '13.png', alt: 'british council' },
  ]

  return (
    <section className="p-[10%_5%] text-center">
      <h2 className="mb-[10px] font-baloo-bold text-[35px] text-[#CD7E50] md:text-[40px] lg:text-[45px]">
        Our Clients
      </h2>
      <p className="font-baloo-medium text-[18px] leading-[1.3] text-[#0A3140]">
        Brands we&apos;ve worked with
      </p>
      <div className="inner mt-[30px] flex flex-wrap justify-between">
        {clients.slice(0, 6).map((client, index) => (
          <div
            key={index}
            className="client-div mb-[20px] flex h-[130px] w-[40%] max-w-[140px] items-center justify-center p-[10px] lg:max-w-[160px] lg:p-[5px]"
          >
            <Image
              src={`/images/client${client.image}`}
              alt={client.alt}
              width={160}
              height={130}
              className={`w-[75%] object-contain ${
                client.image === '5.png' ? 'h-full w-auto' : ''
              }`}
            />
          </div>
        ))}
        <div className="hidden w-full lg:flex lg:justify-center">
          {clients.slice(6).map((client, index) => (
            <div
              key={index}
              className="client-div mx-[10px] mb-[20px] flex h-[130px] max-w-[160px] items-center justify-center p-[5px]"
            >
              <Image
                src={`/images/client${client.image}`}
                alt={client.alt}
                width={160}
                height={130}
                className={`object-contain ${
                  client.image === '5.png' ? 'h-full w-auto' : 'w-[75%]'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
