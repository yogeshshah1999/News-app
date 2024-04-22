import Navbar from "./components/pages/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsProvider } from "./context/NewsContext";

function App() {
  return (
    <NewsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </NewsProvider>
  );
}

export default App;
