import React from 'react'
import Navbar from '../components/Navbar'
import Announcment from '../components/Announcment'
import Slider from '../components/Slider'
import Categoreis from '../components/Categoreis'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
   background-color : #f5fafd;
`;


const Home = () => {

  return (
    <div>
      <Wrapper>
        <Announcment />
        <Navbar />
        <Slider />
        <Categoreis />
        <Products />
        <NewsLetter />
        <Footer />
      </Wrapper>

    </div>
  )
}

export default Home