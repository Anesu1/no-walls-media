import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Clients from '../components/Clients';
import GetInTouch from '../components/GetInTouch';
import Info from '../components/Info';

function Home() {
  return (
    <>
   
        <Banner />
        <About />
        <Info />
        <Clients />
        <GetInTouch />
        
    </>
  )
}

export default Home