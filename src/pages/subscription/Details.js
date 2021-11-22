import styled from "styled-components";
import womanInMat from "../../assets/woman-in-mat.jpg";
import GlobalContext from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  StyledButton,
  StyledDescription,
  StyledMain,
  StyledTitle,
} from "./style.js";
import SummaryBox from "./components/SummaryBox";

export default function Details() {
  const [selectedBox, setSelectedBox] = useState(null);
  const { userData, setSubscriptionData, subscriptionData } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData) navigate("/entrar");
    if (!subscriptionData.planId) navigate("/planos");
  }, [userData, subscriptionData]);
  function selectDetails() {
    navigate("/entrega");
  }
  function toggleSelectedBox(boxName) {
    if (boxName === selectedBox) setSelectedBox(null);
    else setSelectedBox(boxName);
  }
  return (
    <StyledMain>
      <StyledTitle>Bom te ver por aqui, {userData?.name}</StyledTitle>
      <StyledDescription>
        “Agradecer é arte de atrair coisas boas”
      </StyledDescription>
      <StyledCard>
        <img src={womanInMat} alt="woman meditating in mat" />
        {["Plano", "Entrega", "Quero receber"].map((boxName) => (
          <SummaryBox
            selectedBox={selectedBox}
            toggleSelectedBox={toggleSelectedBox}
            boxName={boxName}
          />
        ))}
      </StyledCard>
      <StyledButton onClick={() => selectDetails}>Próximo</StyledButton>
    </StyledMain>
  );
}

const StyledCard = styled.article`
  width: 358px;
  height: 440px;
  margin-top: 32px;
  background: #fff;
  border-radius: 10px;
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
    height: 172px;
    object-fit: cover;
    margin-bottom: 32px;
  }
`;
