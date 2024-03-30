import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import { ThemeProvider } from "./Context";

function App() {
	return (
		<ThemeProvider>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favs" element={<Favs />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/detail/:id" element={<Detail />} />
				</Routes>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
