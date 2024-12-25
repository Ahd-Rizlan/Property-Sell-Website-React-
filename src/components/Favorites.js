import React from "react";

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="mt-4">
      <h3>Favorites</h3>
      {favorites.length > 0 ? (
        <ul className="list-group">
          {favorites.map((fav) => (
            <li
              key={fav.id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{fav.description}</span>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromFavorites(fav.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite properties yet.</p>
      )}
    </div>
  );
};

export default Favorites;
