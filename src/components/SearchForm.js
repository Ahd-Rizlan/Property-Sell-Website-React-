import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [formData, setFormData] = useState({
    type: "any",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    dateAdded: "",
    postcode: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results", { state: formData });
  };

  return (
    <form className="p-4 border rounded" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">Type</label>
          <select
            className="form-select"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="any">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Min Price</label>
          <input
            type="number"
            className="form-control"
            name="minPrice"
            value={formData.minPrice}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Max Price</label>
          <input
            type="number"
            className="form-control"
            name="maxPrice"
            value={formData.maxPrice}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">Min Bedrooms</label>
          <input
            type="number"
            className="form-control"
            name="minBedrooms"
            value={formData.minBedrooms}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Max Bedrooms</label>
          <input
            type="number"
            className="form-control"
            name="maxBedrooms"
            value={formData.maxBedrooms}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Date Added</label>
          <input
            type="date"
            className="form-control"
            name="dateAdded"
            value={formData.dateAdded}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Postcode</label>
        <input
          type="text"
          className="form-control"
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
