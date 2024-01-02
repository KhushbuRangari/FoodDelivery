// CardsGroup.js

import React from "react";

function CardsGroup({ item }) {
  return (
    <div className="card-group">
      {item.map((item, index) => (
        <div key={index} className="card">
          <img src={item.imageURL} className="card-img-top" alt="Card" />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsGroup;
