import styled from "styled-components";
import womanInMat from "../../../assets/woman-in-mat.jpg";
import GlobalContext from "../../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  StyledButton,
  StyledDescription,
  StyledMain,
  StyledTitle,
} from "../style.js";
import API from "../../../services/requests";
import cep from "cep-promise";

export default function Ship() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [ZIPCode, setZIPCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const { userData, subscriptionData } = useContext(GlobalContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData) navigate("/entrar");
    if (!subscriptionData?.planId) navigate("/planos");
    if (!subscriptionData?.shipDateId) navigate("/detalhes");
  }, [userData, subscriptionData]);
  function finishSubscription(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const body = {
      ...subscriptionData,
      name: fullName,
      ZIPCode,
      address,
      state,
      city,
      userId: userData.id,
    };
    API.submitSubscription({ body, token })
      .then(()=>{
        alert("Obrigado, por confiar em nosso trabalho, gratiluz ^^");
        navigate("/meu-plano");
      })
      .catch(() =>
        alert(
          "Não foi possível realizar seu cadastro, por favor tente mais tarde."
        )
      );
  }
  function setLocation({ city, state }) {
    setCity(city);
    setState(state);
  }
  function searchCEP(event) {
    setZIPCode(event.target.value);
    if (event.target.value.length === 8) {
      cep(event.target.value)
        .then((res) => setLocation(res, true))
        .catch(() => setLocation({ city: "", state: "" }));
    }
  }
  return (
    <StyledMain>
      <StyledTitle>Bom te ver por aqui, {userData?.name}</StyledTitle>
      <StyledDescription>
        “Agradecer é arte de atrair coisas boas”
      </StyledDescription>
      <StyledCard>
        <img src={womanInMat} alt="woman meditating in mat" />
        <StyledForm id="form" onSubmit={finishSubscription}>
          <input
            type="text"
            placeholder="Nome completo"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enderesso de entrega"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
          <input
            type="number"
            placeholder="CEP"
            onChange={searchCEP}
            required
          />
          <div className="fake-inputs">
            <div className="city-input" value={city}>
              {city ? city : "Cidade"}
            </div>
            <div>{state ? state : "Estado"}</div>
          </div>
        </StyledForm>
      </StyledCard>
      <StyledButton type="submit" form="form">
        Finalizar
      </StyledButton>
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
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 290px;
  .fake-inputs {
    display: flex;
    gap: 8px;
  }
  .fake-inputs .city-input {
    width: 69%;
  }
  input,
  .fake-inputs div {
    height: 44px;
    background: rgba(224, 209, 237, 0.62);
    border-radius: 5px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #4d65a8;
    padding-left: 8px;
    border: none;
  }
  .fake-inputs div {
    display: flex;
    align-items: center;
    width: 29%;
  }
  .fake-inputs div:hover {
    cursor: not-allowed;
  }
  input::placeholder {
    color: #4d65a8;
  }
`;
