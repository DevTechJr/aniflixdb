import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import movieContext from "./components/movie/MovieContext";
import { MovieProvider } from "./components/movie/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="flex flex-col items-center h-screen">
          <Navbar />

          <main className="container w-full p-5 flex justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
