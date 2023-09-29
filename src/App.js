/** @format */

import "./App.css"
import About from "./Components/About/About"
import Home from "./Components/Home/Home"
import NavBar from "./Components/Navbar/NavBar"
import Popular from "./Components/Popular/Popular"
import Offers from "./Components/Offers/Offers"
import Blog from "./Components/Blog/Blog"
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
