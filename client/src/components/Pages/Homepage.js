// Update your Homepage component

import React from "react";
import useOwnerData from "../../hooks/useOwnerData";
import CardsGroup from "../util/CardsGroup";
import CardsSingle from "../util/CardsSingle";
import Carasoul from "../util/Carasoul";

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
    <div>
      <h1>Homepage</h1>
    <Carasoul item={ownerData}></Carasoul>
      {ownerData.data.map((data,key) => (
        <div key={data.id}>

          <h2>{data.restaurantName}</h2>
          <ul>Menu Items:
          <CardsGroup item={data.menuItems} />
          {  data.menuItems.map((item,key)=>{
             return ( 
             <li key={key}>  
                 <CardsSingle item={item} />
             </li>
             
             )
            })}
          </ul>
        
        </div>
      ))}
    </div>
  );
}

export default Homepage;
