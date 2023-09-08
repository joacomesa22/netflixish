import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetailContainer from "./components/MovieDetailContainer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/saved" exact element={<Saved />} />
          <Route path="/movie/:id" exact element={<MovieDetailContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
