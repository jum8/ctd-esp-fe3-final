import { useContext, createContext, useState, useEffect, useReducer, useMemo } from "react";
import reducer from "./reducer";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const themes = {light: "light", dark: "dark"}

export const ContextProvider = ({ children }) => {

	const [dentists, setDentists] = useState([]);
	const [theme, setTheme] = useState(themes.light);
	const [favsState, favsDispatch] = useReducer(reducer, [], favsInit);

	function favsInit(initialState) {
		return JSON.parse(localStorage.getItem("favs")) || initialState;
	}

	useEffect(() => {
		localStorage.setItem("favs", JSON.stringify(favsState));
	}, [favsState])

	const themeValues = useMemo(() => ({
		theme,
		handleChangeTheme: () => {
			if(theme === themes.light) setTheme(themes.dark);
			if(theme === themes.dark) setTheme(themes.light);
		}
	}), [theme])



	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(data => setDentists(data))
			.catch(error => console.log(error));
	}, [])
	

  return (
		<ContextGlobal.Provider value={{dentists, ...themeValues, favsState, favsDispatch}}>
			{children}
		</ContextGlobal.Provider>
	);
};

export function useGlobalStates() {
  return useContext(ContextGlobal);
}
