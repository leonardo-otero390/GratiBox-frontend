import styled from "styled-components";
import womanInGarden from "../../assets/woman-in-garden.jpg";
import womanInRoom from "../../assets/woman-in-room.jpg";
import GlobalContext from "../../context/GlobalContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Plan() {
  const { userData, setSubscriptionData, subscriptionData } = useContext(GlobalContext);
  const navigate = useNavigate();
  useEffect(() => {
    //if (!userData) navigate("/entrar");
  }, [userData]);
  function selectPlan(planId) {
    setSubscriptionData({ planId });
    navigate("/detalhes");
    console.log(subscriptionData);
  }
  return (
    <StyledMain>
      <StyledTitle>Bom te ver por aqui, {userData?.name}</StyledTitle>
      <StyledDescription>
        Você ainda não assinou um plano, que tal começar agora?
      </StyledDescription>
      <StyledCard>
        <img src={womanInGarden} alt="woman meditating in garden" />
        <p>
          Você recebe um box por semana. Ideal para quem quer exercer a gratidão
          todos os dias.
        </p>
        <StyledButton onClick={()=>selectPlan(1)}>Assinar</StyledButton>
      </StyledCard>
      <StyledCard>
        <img src={womanInRoom} alt="woman meditating in garden" />
        <p>Você recebe um box por mês. Ideal para quem está começando agora</p>
        <StyledButton onClick={()=>selectPlan(2)}>Assinar</StyledButton>
      </StyledCard>
    </StyledMain>
  );
}
const StyledCard = styled.article`
  width: 358px;
  height: 400px;
  margin-top: 32px;
  background: #e5cdb3;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  p {
    margin-top: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    width: 80%;
    color: #4d65a8;
  }
  img {
    width: 354px;
    height: 50%;
    object-fit: cover;
  }
`;
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
const StyledButton = styled.button`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  background: #8c97ea;
  width: 168px;
  height: 39px;
  border-radius: 10px;
  text-align: center;
  border: none;
  margin-top: 32px;
  font-family: "Roboto", sans-serif;
`;
const StyledDescription = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;
