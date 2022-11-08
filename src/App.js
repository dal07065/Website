// import logo from "./logo.svg";
// https://uxdesign.cc/make-your-react-websites-fun-by-adding-interactive-3d-objects-1e1d672887e7
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={<Home />} />
          <Route path="/about" component={<About />} />
          <Route path="/portfolio" component={<Portfolio />} />
        </Routes>
      </Router>
      <Home />
    </div>
  );
}

export default App;
