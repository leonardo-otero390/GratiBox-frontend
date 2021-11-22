import { useContext, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext.js";

export default function DetailsBox({ boxName, isOpen }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { subscriptionData, setSubscriptionData } = useContext(GlobalContext);
  const planId = subscriptionData?.planId;
  const planName = planId === 1 ? "Semanal" : "Mensal";
  const daysOptions =
    planId === 1
      ? ["Segunda", "Quarta", "Sexta"]
      : ["Dia 01", "Dia 10", "Dia 20"];
  const productsOptions = ["Chás", "Incensos", "Produtos Orgânicos"];
  function selectDay(day) {
    setSelectedDay(day * planId);
    setSubscriptionData({
      ...subscriptionData,
      shipDateId: day * planId,
    });
  }
  function toggleSelectedProduct(product) {
    const auxArray = [...selectedProducts];
    const productIndex = auxArray.indexOf(product);
    productIndex === -1
      ? auxArray.push(product)
      : auxArray.splice(productIndex, 1);

    setSubscriptionData({
      ...subscriptionData,
      productsId: auxArray,
    });
    setSelectedProducts(auxArray);
  }
  if (boxName === "Plano") {
    return (
      <StyledDetails isOpen={isOpen}>
        <h3>{planName}</h3>
      </StyledDetails>
    );
  }

  if (boxName === "Entrega") {
    return (
      <StyledDetails isOpen={isOpen}>
        {daysOptions.map((day, index) => {
          return (
            <StyledOption
              key={index}
              isSelected={index + 1 === selectedDay / planId}
            >
              <div onClick={() => selectDay(index + 1)}></div>
              <h3>{day}</h3>
            </StyledOption>
          );
        })}
      </StyledDetails>
    );
  }
  if (boxName === "Quero receber") {
    return (
      <StyledDetails isOpen={isOpen}>
        {productsOptions.map((product, index) => {
          return (
            <StyledOption
              key={index}
              isSelected={selectedProducts.includes(index + 1)}
            >
              <div onClick={() => toggleSelectedProduct(index + 1)}></div>
              <h3>
                {product}
                {}
              </h3>
            </StyledOption>
          );
        })}
      </StyledDetails>
    );
  }
  return <></>;
}
const StyledDetails = styled.div`
  width: 290px;
  height: fit-content;
  background: rgba(224, 209, 237, 0.62);
  border-radius: 0 0 5px 5px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  flex-wrap: wrap;
  gap: 8px;
  h3 {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #4d65a8;
  }
`;
const StyledOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
  div {
    width: 20px;
    height: 20px;
    background-color: ${({ isSelected }) => (isSelected ? "#6D7CE4" : "#fff")};
    border-radius: 5px;
  }
  div:hover {
    cursor: pointer;
  }
`;
