'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Info() {
  const [selectedTab, setSelectedTab] = useState(0)

  const tabs = [
    {
      icon: '/images/tab1.png',
      title: 'Integrated Campaigns & Communications Strategy',
      content: [
        'Everything starts with you. Once your vision is communicated, the magic begins! We will craft a highly creative and effective campaign to get you the desired results. The talent is present and so are the resources and processes! Let\'s make some magic!',
        'We\'re also here to serve as your mouthpiece to the world and to present you exactly how you want to be seen.',
      ],
    },
    {
      icon: '/images/tab2.png',
      title: 'Brand Expression',
      content: [
        'Much like your fingerprint, your brand is one of a kind. Past being seen or heard, it should be felt and experienced. Get your customers to experience your brand in its uniqueness at all interaction points.',
      ],
    },
    {
      icon: '/images/tab3.png',
      title: 'Traditional Advertising',
      content: [
        'Words and images are great, impressions are even better. Every touch point of the customer journey should be maximised and every brand requires a different approach.',
        'We create and design stuff that lingers long in the customer\'s consciousness.',
        'Maya Angelou says it best: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel."',
      ],
    },
    {
      icon: '/images/tab4.png',
      title: 'Strategy',
      content: [
        'Your brand needs to be placed in the best possible outlet. We purchase media space and run your ads at the best place, at the best time, for the best price. We\'ll also monitor the media to ensure that ads are flighted according to schedule.',
      ],
    },
    {
      icon: '/images/tab5.png',
      title: 'Broadcast, video and motion graphics',
      content: [
        'It\'s a known fact that screen interaction time is at an all-time high. What are you gonna do about it? The correct answer is to work with us of course!',
        'Why?',
        'We\'ll make them stop scrolling and pay attention to your brand. We\'ll make them look twice and they won\'t skip your ads if we do them for you.',
        'Eye-catching, riveting and enthralling. That\'s what we promise. And that\'s what you\'ll get!',
      ],
    },
  ]

  return (
    <section className="py-[10%] md:p-[3%]">
      <div className="tabs mx-auto max-w-[500px] bg-[#fcfcfc] p-[5%] md:rounded-[10px] md:p-[20px] lg:flex lg:max-w-[1500px] lg:justify-between">
        <div className="header flex flex-col items-center justify-start">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`tab-header mb-[20px] flex w-[90%] cursor-pointer justify-start border-none bg-transparent text-left font-baloo-bold transition-colors hover:text-[#0A3140] lg:mb-[10px] lg:text-[20px] ${
                selectedTab === index ? 'text-[#0A3140]' : 'text-black'
              }`}
            >
              <Image
                src={tab.icon || "/placeholder.svg"}
                alt={tab.title}
                width={30}
                height={30}
                className="mr-[20px] w-[30px] object-contain"
              />
              <h3 dangerouslySetInnerHTML={{ __html: tab.title.replace(/\n/g, '<br />') }} />
            </button>
          ))}
        </div>
        <div className="panel mt-8 lg:my-auto lg:mt-0 lg:w-[45%]">
          <div className="panel-inner">
            {tabs[selectedTab].content.map((paragraph, index) => (
              <p
                key={index}
                className="mb-[20px] font-baloo leading-[1.3] text-[15px] text-[#0A3140] lg:text-[18px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
