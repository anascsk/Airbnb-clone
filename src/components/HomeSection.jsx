import React from "react";
import "./HomeSection.css";

import HomeCard from "./HomeCard";

// ES7 snippets to do 'rfce'

function HomeSection() {
  return (
    <div className="home">
         <h2>Pick from our Superhosts</h2>
      <div className="home__section">
         
        <HomeCard
          src="https://a0.muscache.com/im/pictures/70b244f4-e062-4b58-b23f-5baf37ed313f.jpg?im_w=960"
          title="The Backwater Rhapsody, Alleppey"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="₹6,900/night"
        />
        <HomeCard
          src="https://a0.muscache.com/im/pictures/9f40ee6f-cbdf-42b9-9c79-c8f3fb56ae49.jpg?im_w=960"
          title="Marmalade Springs Wayanad - Cottage"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="₹4,000/night"
        />
        <HomeCard
          src="https://a0.muscache.com/im/pictures/fe525a79-335e-4deb-937c-491218b037e4.jpg?im_w=960"
          title="Ivy Cottage at Stumpfields"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="₹3,501/night"
        />
      </div>
      <div className="home__section">
        <HomeCard
          src="https://a0.muscache.com/im/pictures/27b36f5f-0d59-4f64-9ddf-b79d97417fa7.jpg?im_w=960"
          title="Private Sea View Villa - Privasea"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="₹7,999/night"
        />
        <HomeCard
          src="https://a0.muscache.com/im/pictures/6f52efcb-f975-4681-a7a3-161e81d7c9d9.jpg?im_w=960"
          title="Spacious Peaceful Modern Bedroom"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="₹8,000/night"
        />
        <HomeCard
          src="https://a0.muscache.com/im/pictures/1c6fbf50-2cad-4327-8495-4952c9fb9616.jpg?im_w=960"
          title="River Edge God's Own Villa Home Away Home"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="₹6,900/night"
        />
      </div>
    </div>
  );
}

export default HomeSection;
