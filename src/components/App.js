import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.js";
import SignUp from "../pages/sign/sign-up/SignUp.js";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cadastro" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
