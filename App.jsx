import React, { useState, useEffect } from "react";
import carsData from "./data/cars.json";
import axios from "axios";
import "./App.css";
import CarSearch from "./components/CarSearch";

const App = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(6);
  useEffect(() => {
    setCars(carsData.cars);
  }, []);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <CarSearch />
      <div className="App">
        <div className="card">
          {currentCars.map((car, index) => (
            <div key={index} className="car-card">
              <img src={car.url} alt={cars.title} />
              <div className="a">
                <ul>
                  <li className="carname">{car.carName}</li>
                  <li className="year">{car.year}</li>
                </ul>
              </div>
              <div className="b">
                <ul>
                  <li className="size">
                    <h5>{car.size}</h5>
                  </li>
                  <li className="type">
                    <h5>{car.type}</h5>
                  </li>
                </ul>
              </div>
              <div className="b">
                <ul>
                  <li className="average">
                    <h5>{car.average}</h5>
                  </li>
                  <li className="control">
                    <h5>{car.control}</h5>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="c">
                <h3 className="rent">{car.rent}</h3>
                <button>Rent now</button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}>
            Previous
          </button>
          {[...Array(10)].map((e, i) => (
            <button key={i} onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === 10}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
