import logo from "./logo.svg";
import "./App.css";
import "./Query.css";
import Home from "./page/Home";
import Navbar from "./component/Navbar";
import AllShop from "./page/AllShop";
import About from "./page/About";
import Contact from "./page/Contact";
import Footer from "./component/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "./component/Sidebar";
import SingleElement from "./page/SingleElement";
import Cart from "./component/Cart";
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shope" element={<AllShop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pot/:id" element={<SingleElement />} />
      </Routes>
      <Cart />
      <Footer />
    </Router>
  );
}

export default App;
