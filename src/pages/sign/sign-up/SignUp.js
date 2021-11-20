import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../../../services/requests";

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
					navigate("/sign-in");
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
      <Link to="/login">
        <StyledLink>Já sou grato</StyledLink>
      </Link>
    </StyledMain>
  );
}
const StyledMain = styled.main`
  width: 99vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 56px 0;
`;
const StyledTitle = styled.h1`
  font-size: 28px;
  color: #fff;
  margin-bottom: 40px;
  font-family: "Roboto", sans-serif;
`;
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  input {
    width: 325px;
    height: 64px;

    background: #ffffff;
    border: 1px solid #604848;
    border-radius: 10px;
    ::placeholder {
      color: rgba(96, 72, 72, 0.4);
      font-size: 24px;
      font-family: "Roboto", sans-serif;
    }
  }
`;
const StyledButton = styled.button`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  width: 237px;
  height: 56px;
  background: #8c97ea;
  border-radius: 10px;
  text-align: center;
  border: none;
  margin-top: 62px;
  font-family: "Roboto", sans-serif;
`;
const StyledLink = styled.button`
  margin-top: 24px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: none;
  border: none;
  font-family: "Roboto", sans-serif;
`;
