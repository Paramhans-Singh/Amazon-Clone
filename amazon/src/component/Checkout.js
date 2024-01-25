import React from "react";
import "../styles/checkout.css";
import Subtotal from "../component/Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout-img"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
