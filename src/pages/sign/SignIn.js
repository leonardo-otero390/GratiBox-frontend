import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import API from "../../services/requests";
import {
  StyledButton,
  StyledForm,
  StyledLink,
  StyledMain,
  StyledTitle,
} from "./style.js";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserData } = useContext(GlobalContext);

  function submitForm(event) {
    event.preventDefault();
    const body = { email, password };
    API.signIn({ body })
      .then((res) => {
        navigate("/planos");
        localStorage.setItem('token', res.data.token);
        setUserData(res.data.user);
      })
      .catch((err) => {
        if (err.response.status === 401)
          return alert("Campo email/senha inválido");
        return alert("Não foi possível entrar");
      });
  }

  return (
    <StyledMain>
      <StyledTitle>Bem vindo ao GratiBox</StyledTitle>
      <StyledForm onSubmit={submitForm}>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
      <Link to="/cadastro">
        <StyledLink>Ainda não sou grato</StyledLink>
      </Link>
    </StyledMain>
  );
}
