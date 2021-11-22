import styled from "styled-components";

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

export {
    StyledButton,
    StyledDescription,
    StyledMain,
    StyledTitle,
}