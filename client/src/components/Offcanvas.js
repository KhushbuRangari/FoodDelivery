import React from 'react';

const Offcanvas = () => {
  return (
<div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">
        <div className="row">
            <div className="col-6">d</div>
            <div className="col-6">a</div>
        </div>

    </h5>
    
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
  </div>
  <div className="offcanvas-body">
        <hr />
        <div className='row'>
            <div className="col-8">
              <h5>Dish name * quantity</h5>
            </div>
            <div className="col-4">Total</div>
        </div>
        <div className='row'>
            <div className="col-8">
              <h5>Dish name * quantity</h5>
            </div>
            <div className="col-4">Total</div>
        
        </div>
        <div className='row'>
            <div className="col-8">
              <h5>Dish name * quantity</h5>
            </div>
            <div className="col-4">Total</div>
        
        </div>

        <hr />
        <div className='row'>
            <div className="col-8">
              <h5>SubTotal</h5>
            </div>
            <div className="col-4">Total</div>
        
        </div>
        <button className='btn  btn-danger w-100 '><h3>Checkout</h3></button>
  </div>
</div>

  );
};

export default Offcanvas;
