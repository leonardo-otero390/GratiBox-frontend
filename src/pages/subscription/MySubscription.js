import styled from "styled-components";
import womanInMat from "../../assets/woman-in-mat.jpg";
import GlobalContext from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { StyledDescription, StyledMain, StyledTitle } from "./style.js";
import API from "../../services/requests";

export default function MySubscription() {
  const { userData } = useContext(GlobalContext);
  const [subscriptionData, setSubscriptionData] = useState(undefined);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData) navigate("/entrar");
    const token = localStorage.getItem("token");
    API.getSubscription({ token }).then((res) => setSubscriptionData(res.data));
  }, [userData]);
  return (
    <StyledMain>
      <StyledTitle>Bom te ver por aqui, {userData?.name}</StyledTitle>
      <StyledDescription>
        “Agradecer é arte de atrair coisas boas”
      </StyledDescription>
      <StyledCard>
        <img src={womanInMat} alt="woman meditating in mat" />
        <StyledPlanInfo>
          Plano:<span> {subscriptionData.plan}</span>
        </StyledPlanInfo>
        <StyledPlanInfo>
          Data de assinatura:<span> {subscriptionData.sign_date}</span>
        </StyledPlanInfo>
        {subscriptionData.products.map(product => <StyledPlanInfo>{product}</StyledPlanInfo>)}
      </StyledCard>
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
const StyledPlanInfo = styled.h3`
  width: 100%;
  padding-left: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #4d65a8;
  span {
    color: #e63c80;
  }
`;
