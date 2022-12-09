import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'


const Navbar = () => {
	const {theme, handleChangeTheme} = useGlobalStates();

  return (
    <nav className={theme}>
			<Link to="/home">Home</Link>
			<Link to="/contacto">Contact</Link>
			<Link to="/favs">Favs</Link>
      <button onClick={handleChangeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar