import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";

const Cartitem = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  const { removeFromCart } = useContext(Context);

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeFromCart}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></i>
      <img src="item.url" width="130px" alt="/" />
      <p>$5.99</p>
    </div>
  );
};

Cartitem.prototype = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default Cartitem;
