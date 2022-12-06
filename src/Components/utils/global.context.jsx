import { useContext, createContext, useState, useEffect } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentists, setDentists] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(data => setDentists(data))
			.catch(error => console.log(error));
	}, [])
	

  return (
		<ContextGlobal.Provider value={{dentists}}>
			{children}
		</ContextGlobal.Provider>
	);
};

export function useGlobalStates() {
  return useContext(ContextGlobal);
}
