import React, { useState, useEffect } from 'react';
import Axios from 'axios';
const PlantList = props => {
  const [plantsAPI, setPlants] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3333/plants')
      .then(res => {
        console.log(res);
        setPlants(res.data.plantsData);
      })
      .catch(err => {
        console.log('plants error', err);
      });
  }, []);

  console.log(plantsAPI);
  return (
    <main className="plant-list">
      {plantsAPI?.map(plant => (
        <div className="plant-card" key={plant.id}>
          <img className="plant-image" src={plant.img} alt={plant.name} />
          <div className="plant-details">
            <h2 className="plant-name">{plant.name}</h2>
            <p className="plant-scientific-name">{plant.scientificName}</p>
            <p>{plant.description}</p>
            <div className="plant-bottom-row">
              <p>${plant.price}</p>
              <p>☀️ {plant.light}</p>
              <p>💦 {plant.watering}x/month</p>
            </div>
            <button
              className="plant-button"
              onClick={() => props.addToCart(plant)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </main>
  );
};
export default PlantList;
