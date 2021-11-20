import styled from "styled-components";

export default function SignUp() {
  return (
    <StyledMain>
      <StyledTitle>Bem vindo ao GratiBox</StyledTitle>
      <StyledForm>
        <input type="text" placeholder="Nome" required />
        <input type="text" placeholder="oi" required />
        <input type="text" placeholder="Nome" required />
        <input type="text" placeholder="Nome" required />
        <StyledButton>Cadastrar</StyledButton>
      </StyledForm>
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
  gap:8px;
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
  margin-top:62px;
  font-family: 'Roboto', sans-serif;
`;
