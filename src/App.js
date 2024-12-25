import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import PropertyDetails from "./components/PropertyDetails";
import Favorites from "./components/Favorites";
import "./styles/App.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (property) => {
    if (!favorites.find((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route
            path="/results"
            element={<Results addToFavorites={addToFavorites} />}
          />
          <Route
            path="/property/:id"
            element={<PropertyDetails addToFavorites={addToFavorites} />}
          />
        </Routes>
        <Favorites
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
        />
      </div>
    </Router>
  );
};

export default App;
