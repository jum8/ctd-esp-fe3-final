
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/global.context";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";


function App() {
  return (
      <div className="App">
				<ContextProvider>
          <Navbar/>
						<Routes>
							<Route path="/" element={<Home/>} />
							<Route path="/home" element={<Home/>} />
							<Route path="/dentist/:id" element={<Detail/>} />
							<Route path="/contacto" element={<Contact/>} />
							<Route path="/favs" element={<Favs/>} />
						</Routes>
          <Footer/>
				</ContextProvider>
      </div>
  );
}

export default App;
