import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";


const Favs = () => {
	const favs = JSON.parse(localStorage.getItem("favs")) || [];
	const { theme } = useGlobalStates();

  return (
    <div className={`favs ${theme}`}>
      <h1 className={theme}>Dentists Favs</h1>
      <div className="card-grid">
				{favs.map(dentist => (
					<Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>
				))}
      </div>
    </div>
  );
};

export default Favs;
