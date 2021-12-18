import React from 'react'
import Footer from '../components/Footer'
import Hosting from '../components/Hosting'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import TripCard from '../components/TripCard'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Landing/>
            <TripCard/>
            <Hosting/>
            <Footer/>
         
        </div>
    )
};

export default Home
