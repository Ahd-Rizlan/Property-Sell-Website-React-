import React from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../data/properties.json";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const PropertyDetails = ({ addToFavorites }) => {
  const { id } = useParams();
  const property = propertiesData.find((p) => p.id === parseInt(id));

  if (!property) {
    return <p>Property not found.</p>;
  }

  return (
    <div className="mt-4">
      <h2>{property.description}</h2>
      <div className="row">
        <div className="col-md-8">
          <img
            src={property.images[0]}
            alt={property.description}
            className="img-fluid mb-3"
          />
          <div className="d-flex">
            {property.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="img-thumbnail me-2"
                style={{ width: "100px", height: "auto" }}
              />
            ))}
          </div>
          <button
            className="btn btn-warning mt-3"
            onClick={() => addToFavorites(property)}
          >
            Add to Favorites
          </button>
        </div>
        <div className="col-md-4">
          <Tabs defaultActiveKey="description" id="property-details-tabs">
            <Tab eventKey="description" title="Description">
              <p>{property.longDescription}</p>
            </Tab>
            <Tab eventKey="floorplan" title="Floor Plan">
              <a href={property.floorPlan} target="_blank" rel="noreferrer">
                View Floor Plan
              </a>
            </Tab>
            <Tab eventKey="map" title="Map">
              <iframe
                src={property.map}
                title="Google Map"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
