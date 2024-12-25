import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import propertiesData from "../data/properties.json";

const Results = ({ addToFavorites }) => {
  const location = useLocation();
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const searchCriteria = location.state || {};
    const filtered = propertiesData.filter((property) => {
      const matchesType =
        searchCriteria.type === "any" || property.type === searchCriteria.type;
      const matchesPrice =
        (!searchCriteria.minPrice ||
          property.price >= searchCriteria.minPrice) &&
        (!searchCriteria.maxPrice || property.price <= searchCriteria.maxPrice);
      const matchesBedrooms =
        (!searchCriteria.minBedrooms ||
          property.bedrooms >= searchCriteria.minBedrooms) &&
        (!searchCriteria.maxBedrooms ||
          property.bedrooms <= searchCriteria.maxBedrooms);
      const matchesDate =
        !searchCriteria.dateAdded ||
        new Date(property.dateAdded) >= new Date(searchCriteria.dateAdded);
      const matchesPostcode =
        !searchCriteria.postcode ||
        property.postcode.startsWith(searchCriteria.postcode);

      return (
        matchesType &&
        matchesPrice &&
        matchesBedrooms &&
        matchesDate &&
        matchesPostcode
      );
    });

    setFilteredProperties(filtered);
  }, [location.state]);

  return (
    <div className="mt-4">
      <h2>Search Results</h2>
      <div className="row">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div className="col-md-4 mb-4" key={property.id}>
              <div className="card">
                <img
                  src={property.images[0]}
                  className="card-img-top"
                  alt={property.description}
                />
                <div className="card-body">
                  <h5 className="card-title">{property.description}</h5>
                  <p className="card-text">£{property.price}</p>
                  <Link
                    to={`/property/${property.id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                  <button
                    className="btn btn-warning mt-2"
                    onClick={() => addToFavorites(property)}
                  >
                    Add to Favorites
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No properties match your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Results;
