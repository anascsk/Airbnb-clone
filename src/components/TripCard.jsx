import React from "react";
import "./TripCard.css";
import TripCardSheet from "./TripCardSheet";

const TripCard = () => {
  return (
    <div>
      <h1>Inspiration for your next trip</h1>
      <div className="tripCardContainer">
      
        <TripCardSheet
          pic="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQr1egyeMlxaQBiYvCjNjttXwGX37eis_GGeGAg6y5bUwNRcaiJc42dirBBeGoKZsAd4Q80VxGnOMsW5-rlf9Hdzg"
          place="Munnar"
          distance="92"
        />
        <TripCardSheet
          pic="https://static.india.com/wp-content/uploads/2018/10/Ooty.jpg?impolicy=Medium_Resize&w=1200&h=800"
          place="Ooty"
          distance="180"
        />
        <TripCardSheet
          pic="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQqFPb9aY_eFA9LuCXkNsCq02n1oeWHQbeIBSk2dVm1VnUHk8FlzUnaN0SKkQhQ6QOOgYZzsMglA4xyuzGkpr8ivA"
          place="Athirappally"
          distance="85"
        />
        <TripCardSheet
          pic="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRoGEXIk6d7qUdlaL74HbPtFj6s40awKV-lc5PR34GBdsFJWa7KKwQdkprW9zi_yS4SpSBL1GJMYH0b98ZqOprKBQ"
          place="Mysore"
          distance="202"
        />
      </div>
    </div>
  );
};

export default TripCard;
