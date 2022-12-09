import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";

const Card = ({ name, username, id, showFavButton }) => {
	const { favsState, favsDispatch } = useGlobalStates();

	const addFav = (fav) => {
		if(favsState.find(fav => fav.id === id)) {
			alert("Dentist already added");
		} else {
			console.log(fav);
			favsDispatch({type: "ADD_FAV", payload: fav});
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
				<button onClick={() => addFav({name, username, id})} className="favButton">
          Add fav
        </button>}
      </div>
    </Link>
  );
};

export default Card;
