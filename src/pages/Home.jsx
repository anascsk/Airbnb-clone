import React from "react";
import Footer from "../components/Footer";
import Hosting from "../components/Hosting";
import Landing from "../components/Landing";
import Login from "./Login";
import Navbar from "../components/Navbar";
import TripCard from "../components/TripCard";
import Register from "./Register";
import DatePicker from "./DatePicker";
import SearchList from "./SearchList";
import HomeSection from "../components/HomeSection";

const Home = () => {
  return (
    <div>
      
      <Navbar />
     {/* <DatePicker/> */}
      <Landing />
     
      <HomeSection/>
      <TripCard />
      <Hosting />
      <Footer />
    </div>
  );
};

export default Home;
