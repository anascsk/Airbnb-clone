import "./SearchList.css";
import { Button } from "@material-ui/core";
import Apartment from "../components/Apartment";
import Footer from "../components/Footer";

const SearchList = () => {
  return (
    <div>
     
    <div className="searchPage">
      <div className="searchPage__info">
        <p>➤ 62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">Dedicated workspace</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <Apartment
        img="https://a0.muscache.com/im/pictures/e5b1cd83-6636-4cc9-88b6-ce195d29830c.jpg?im_w=960"
        location="Wayanad, Kerala"
        title="The MudHouse Marayoor - Cob (Nature Living)"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.7}
        price="₹6,900 / night"
        total="₹26,100 total"
      />

      <Apartment
        img="https://a0.muscache.com/im/pictures/9f40ee6f-cbdf-42b9-9c79-c8f3fb56ae49.jpg?im_w=960"
        location="Munnar, Kerala"
        title="Marmalade Springs Wayanad - Cottage"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
        star={4.3}
        price="₹4,000 / night"
        total="₹15,134 total"
      />

      <Apartment
        img="https://a0.muscache.com/im/pictures/fe525a79-335e-4deb-937c-491218b037e4.jpg?im_w=960"
        location="Wayanad, Kerala"
        title="Ivy Cottage at Stumpfields"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.89}
        price="₹3,501 / night"
        total="₹11,507 total"
      />
      <Apartment
        img="https://a0.muscache.com/im/pictures/27b36f5f-0d59-4f64-9ddf-b79d97417fa7.jpg?im_w=960"
        location="Thiruvananthapuram, Kerala"
        title="Private Sea View Villa - Privasea"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="₹7,999 / night"
        total="₹27,999 total"
      />
      <Apartment
        img="https://a0.muscache.com/im/pictures/6f52efcb-f975-4681-a7a3-161e81d7c9d9.jpg?im_w=720"
        location="Mysore, Karnataka"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="₹8,000 / night"
        total="₹32,369 total"
      />
      <Apartment
        img="https://a0.muscache.com/im/pictures/1c6fbf50-2cad-4327-8495-4952c9fb9616.jpg?im_w=960"
        location="Munnar, Kerala"
        title="River Edge God's Own Villa Home Away Home"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Washing Machine"
        star={4.23}
        price="₹9,500 / night"
        total="₹32,524 total"
      />
      <Apartment
        img="https://a0.muscache.com/im/pictures/miso/Hosting-47209567/original/5202fc72-5e7e-49e3-af0e-e2b5e9084a0a.jpeg?im_w=960"
        location="Calicut, Kerala"
        title="MSimba Estate Villa"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="₹25,000 / night"
        total="₹99,088 total"
      />


<Apartment
        img="https://a0.muscache.com/im/pictures/miso/Hosting-23862260/original/03acb359-7d7a-46f8-92f2-8e6ecaf75320.jpeg?im_w=960"
        location="Wayanad, Kerala"
        title="The MudHouse Marayoor - Cob (Nature Living)"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.7}
        price="₹6,900 / night"
        total="₹26,100 total"
      />

      <Apartment
        img="https://a0.muscache.com/im/pictures/e06cab9f-65fc-445e-bb99-5fa728399404.jpg?im_w=1200"
        location="Munnar, Kerala"
        title="Marmalade Springs Wayanad - Cottage"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
        star={4.3}
        price="₹4,000 / night"
        total="₹15,134 total"
      />

      <Apartment
        img="https://a0.muscache.com/im/pictures/ff34926a-564d-44d0-a23a-3c3f78dd601f.jpg?im_w=960"
        location="Wayanad, Kerala"
        title="Ivy Cottage at Stumpfields"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.89}
        price="₹3,501 / night"
        total="₹11,507 total"
      />
      <Apartment
        img="https://a0.muscache.com/im/pictures/27b36f5f-0d59-4f64-9ddf-b79d97417fa7.jpg?im_w=960"
        location="Thiruvananthapuram, Kerala"
        title="Private Sea View Villa - Privasea"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="₹7,999 / night"
        total="₹27,999 total"
      />
      <Apartment
        img="https://a0.muscache.com/im/pictures/1b676c98-cbd3-48f1-ba2e-e8cacf7dbe08.jpg?im_w=720"
        location="Mysore, Karnataka"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="₹8,000 / night"
        total="₹32,369 total"
      />
    </div>
    <Footer/>
    </div>
  );
};

export default SearchList;
