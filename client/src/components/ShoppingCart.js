import React from 'react';

/********* DO NOT DO ANYTHING IN THIS COMPONENT *********/

export default function ShoppingCart(props) {
  console.log(props);
  const total = props.cart.reduce((sum, d) => sum + d.price * d.quantity, 0);
  return (
    <div className="cart">
      {props.cart.map(plant => (
        <div className="plant-card" key={plant.id}>
          <img className="plant-image" src={plant.img} alt={plant.name} />
          <div className="plant-details">
            <h2 className="plant-name">{plant.name}</h2>
            <p>${plant.price}</p>
            <p>quantity: {plant.quantity}</p>
            <button
              className="plant-button"
              onClick={() => props.removeFromCart(plant)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="checkout-section">
        <p className="total">Total: ${total}</p>
        <button
          className="checkout"
          onClick={() => props.history.push('/checkout')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
