import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, showFavButton }) => {
  const addFav = (e) => {
		const favs = JSON.parse(localStorage.getItem("favs")) || [];
		if(favs.find(fav => fav.id === id)) {
			alert("Dentist already added");
		} else {
			favs.push({name, username, id});
			localStorage.setItem("favs", JSON.stringify(favs));
			alert("Dentist added successfully");
		}
  };

	const preventLinkDefault = (e) => {
		if(e.target.tagName === "BUTTON") e.preventDefault();
	};

  return (
    <Link to={`/dentist/${id}`} onClick={preventLinkDefault}>
      <div className="card">
        <img src="./images/doctor.jpg" alt="dentist" />
        <h2>{name}</h2>
        <p>{username}</p>
				<p>{id}</p>
        {showFavButton && 
				<button onClick={(e) => addFav(e)} className="favButton">
          Add fav
        </button>}
      </div>
    </Link>
  );
};

export default Card;
