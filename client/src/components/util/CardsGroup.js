// CardsGroup.js

import React from "react";

function CardsGroup({ item }) {
  return (
    <div className="card-group mb-3 h-5   ">
      {item.map((item, index) => (
        <div key={index} className="card mx-3">
          <span style={{borderRadius:"25px"}}><img src={item.imageURL} className="card-img-top" alt="Card" /></span>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h5 className="card-text fw-bold">&#8377;{item.price}</h5>
          </div>
          <div class="card-footer ">
            <small class="text-muted">
              <a href="#" class="w-100 btn btn-block btn-primary" >
                Add to Cart
              </a>
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsGroup;
