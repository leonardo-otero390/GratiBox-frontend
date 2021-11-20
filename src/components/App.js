import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home.js";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
