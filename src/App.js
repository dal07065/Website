// import logo from "./logo.svg";
// https://uxdesign.cc/make-your-react-websites-fun-by-adding-interactive-3d-objects-1e1d672887e7
import "./App.css";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    // <div className="App">
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </div>
    </Router>
  );
  {
    /* <Router>
        <Navbar />
        <Home />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </div> */
  }
}

export default App;
