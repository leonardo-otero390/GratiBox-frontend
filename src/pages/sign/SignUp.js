import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import API from "../../services/requests";
import {
  StyledButton,
  StyledForm,
  StyledLink,
  StyledMain,
  StyledTitle,
} from "./style.js"

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function submitForm(event) {
    event.preventDefault();
    if (password !== confirmPassword)
      return alert("A senha e a confirmação devem ser iguais");
    const body = { name, email, password };
    API.signUp({body})
				.then(() => {
					navigate("/entrar");
				})
				.catch((error) => {
          if(error.response.status === 409) return alert("O email inserido já está em uso");
          return alert("Não foi possível realizar o cadastro");
				});
  }

  return (
    <StyledMain>
      <StyledTitle>Bem vindo ao GratiBox</StyledTitle>
      <StyledForm onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirmar senha"
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        <StyledButton type="submit">Cadastrar</StyledButton>
      </StyledForm>
      <Link to="/entrar">
        <StyledLink>Já sou grato</StyledLink>
      </Link>
    </StyledMain>
  );
}
