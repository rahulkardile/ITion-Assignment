import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import Movie from "./page/Movie";
import Search from "./page/Search";
import About from "./page/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:name" element={<Movie />} />
        <Route path="/search/:searchText" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
