import React from 'react'
import Header from "../components/Header";
import Steps from '../components/Steps';
import BigSlide from '../components/BigSlide';
import Testimonial from '../components/Testimonial';
import Upload from '../components/Upload';
import Footer from '../components/Footer';


 const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BigSlide />
      <Testimonial />
      <Upload />
     <Footer />
    </div>
  )
}

export default Home;