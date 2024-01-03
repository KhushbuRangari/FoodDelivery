// Update your Homepage component

import React from "react";
import useOwnerData from "../../hooks/useOwnerData";
import CardsGroup from "../util/CardsGroup";
import CardsSingle from "../util/CardsSingle";
import Carousel from "../util/Carousel";
import CarouselForRest from "../util/CarouselForRest";

function Homepage() {
  const { ownerData, loading, error } = useOwnerData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  // Render your component with the fetched ownerData
  return (
    <div className="container my-3">
 
    <Carousel item={ownerData}></Carousel>
<hr />
    <h2 className="text-start fw-bold">Restaurants in Pune</h2>
    <div className="filter">
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item">  <button>filter</button></li>
      <li className="list-group-item">  <button>filter</button></li>
      <li className="list-group-item">  <button>filter</button></li>
      <li className="list-group-item">  <button>filter</button></li>
    </ul>
    </div>
      {ownerData.data.map((data,key) => (
        <div key={data.id}>

          <h2 className="fw-bold">{data.restaurantName}</h2>
       
          <CardsGroup item={data.menuItems} />
      
        </div>
      ))}

    <CarouselForRest item={ownerData}></CarouselForRest>
    </div>
  );
}

export default Homepage;
