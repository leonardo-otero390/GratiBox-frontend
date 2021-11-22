import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalContext.js";
import Home from "../pages/home/Home.js";
import SignIn from "../pages/sign/SignIn.js";
import SignUp from "../pages/sign/SignUp.js";
import Details from "../pages/subscription/Details.js";
import Plan from "../pages/subscription/Plan.js";

export default function App() {
  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cadastro" element={<SignUp />} />
          <Route exact path="/entrar" element={<SignIn />} />
          <Route exact path="/planos" element={<Plan />} />
          <Route exact path="/detalhes" element={<Details />} />
        </Routes>
      </GlobalProvider>
    </Router>
  );
}
