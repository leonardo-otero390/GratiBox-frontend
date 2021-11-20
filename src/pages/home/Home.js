import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../../assets/background.webp";

export default function Home() {
  return (
    <StyledMain>
      <img src={background} alt="woman-meditating" className="background" />
      <div>
        <StyledTitle>
          <strong>Bem vindo ao GratiBox</strong>
        </StyledTitle>
        <StyledDescription>
          Receba em casa um box com chás, produtos organicos, incensos e muito
          mais...
        </StyledDescription>
      </div>
      <div>
        <Link to="/cadastro">
          <StyledButton>Quero começar</StyledButton>
        </Link>
        <Link to="/login">
          <StyledLink>Já sou grato</StyledLink>
        </Link>
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  .background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  width: 90%;
  max-width: 340px;
  height:99vh;
  margin: 0 auto;

  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding:56px 0;

div{
  display:flex;
  flex-direction: column;
  align-items: center;
}
`;
const StyledTitle = styled.h1`
  font-size: 28px;
  color: #fff;
  margin-bottom:40px;
  font-family: 'Roboto', sans-serif;
`;
const StyledDescription = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;
const StyledButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  width: 202px;
  height: 45px;
  background: #8c97ea;
  border-radius: 10px;
  text-align: center;
  border: none;
  margin-bottom:17px;
  font-family: 'Roboto', sans-serif;
`;
const StyledLink = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: none;
  border: none;
  font-family: 'Roboto', sans-serif;
`;
