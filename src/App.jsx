import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/saved" exact element={<Saved />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
