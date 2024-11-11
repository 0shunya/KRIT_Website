import "./App.css";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./components/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Card1 } from "./components/card1";
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/nav" element={<Navbar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/card1" element={<Card1 />} />
      </Routes>
    </Router>
  );
}

export default App;
