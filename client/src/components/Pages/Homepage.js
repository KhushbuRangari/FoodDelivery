

import React, { useState } from "react";
import useOwnerData from "../../hooks/useOwnerData";
import CardsGroup from "../util/CardsGroup";
import Carousel from "../util/Carousel";
import CarouselForRest from "../util/CarouselForRest";
import CardsGroupSort from "../util/CardsGroupSort";
import { Link } from "react-router-dom";

function Homepage() {
  const { ownerData, loading, error,setCart } = useOwnerData();
  const [sortingOption, setSortingOption] = useState("");
  const [sortedData, setSortedData] = useState([]);

 
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }
  const sortedByLowToHighPrice = ownerData.data
  .map((item) => {
    const menuItemsWithRestaurantName = item.menuItems.map((i) => ({
      restaurantName: item.restaurantName,
      menuItem: i,
    }));

    return menuItemsWithRestaurantName;
  })
  .flat()
  .sort((a, b) => a.menuItem.price - b.menuItem.price)
  .map((item) => ({
    restaurantName: item.restaurantName,
    menuItem: item.menuItem,
  }));

  const sortedByHighToLowPrice = ownerData.data
  .map((item) => {
    const menuItemsWithRestaurantName = item.menuItems.map((i) => ({
      restaurantName: item.restaurantName,
      menuItem: i,
    }));

    return menuItemsWithRestaurantName;
  })
  .flat()
  .sort((a, b) => b.menuItem.price - a.menuItem.price)
  .map((item) => ({
    restaurantName: item.restaurantName,
    menuItem: item.menuItem,
  }));



    function handleChange(e) {
      setSortingOption(e.target.dataset.value);
      if (sortingOption === "lowToHigh") {
                setSortedData(sortedByLowToHighPrice);
              } else if( sortingOption==="highToLow"){
                setSortedData(sortedByHighToLowPrice)
              }
    }
    // const s = sortedByHighToLowPrice.map((i)=>{return(
    //   i.menuItem
    // )})
  return (
    <div className="container my-3">
    
      
      <h2 className="text-start fw-bold">Restaurants in Pune</h2>
      <CarouselForRest item={ownerData}></CarouselForRest>
      <div className="filter">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">
            <div className="dropdown">
              <button
                className="btn btn-secondary text-black dropdown-toggle text"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{marginBottom:"10px"}}
              >
                Filter
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link
                  className="dropdown-item"
                  data-value="lowToHigh"
                  name="lowToHigh"
                  onClick={handleChange}
                >
                  Sort(Low to High)
                </Link>
                <Link
                  className="dropdown-item"
                  data-value="highToLow"
                  name="highToLow"
                  onClick={handleChange}
                >
                  Sort(High to Low)
                </Link>
              </div>
            </div>
          </li>
          {/* <li className="list-group-item">
            <button>filter</button>
          </li>
          <li className="list-group-item">
            <button>filter</button>
          </li>
          <li className="list-group-item">
            <button>filter</button>
          </li> */}
        </ul>
      </div>
     
     <div className="d-flex flex-wrap justify-content-center">
     {sortingOption ==="lowToHigh"
        ?   sortedByLowToHighPrice.map((i,key)=>{return (  
          <div key={key}> <CardsGroupSort item={i.menuItem} restId={i._id} restName={i.restaurantName} setCart={setCart}></CardsGroupSort></div>)}
          )
        :sortingOption ==="highToLow"? 
         sortedByHighToLowPrice.map((i,key)=>{return (  
          <div key={key}>
          
             <CardsGroupSort item={i.menuItem} restId={i._id} restName={i.restaurantName}  setCart={setCart}></CardsGroupSort> </div>)}
             
             )
         : ownerData.data.map((data, key) => (
            <div key={data.id} className="d-flex-row">
              {/* <h5 className="fw-bold">{data.restaurantName}</h5> */}
              {
                data.menuItems.map((item,key)=>{return( 
                   <CardsGroup item={item} restId={data._id} restName={data.restaurantName}  setCart={setCart}/>)})
              }
            
            </div>
          ))
          }
     </div>
     <Carousel item={ownerData}></Carousel>
      <hr />

    </div>
  );
}

export default Homepage;
