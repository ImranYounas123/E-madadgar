import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import imag1 from '../../assets/illustrator/OrgImg.jpg'
import OrgCard from './OrgCard/OrgCard'

export const Home = () => {
  return (
    <div>
        <Header />
        <img src={imag1} alt="image" style={{width: "100%", marginTop:"10%"}}/>
        <OrgCard />
        <Footer />
    </div>
  )
}
